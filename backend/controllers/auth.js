var User = require('../model/user.js')
var jwt = require('jsonwebtoken')
var bcrypt = require('bcrypt')
const { createJWT, createRefreshJWT } = require('../utils/auth')
const TIMEOUT = 3600

const emailRegexp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

exports.signup = (req, res, next) => {
  let {
    firstName,
    lastName,
    email,
    type,
    mobile,
    password,
    sports,
    yearOfExperience,
    certificate,
  } = req.body

  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        return res
          .status(409)
          .json({ errors: [{ user: 'email already exists' }] })
      } else {
        const user = new User({
          firstName,
          lastName,
          email,
          type,
          mobile,
          password,
          sports,
          yearOfExperience,
          certificate,
        })

        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(password, salt, function (err, hash) {
            if (err) throw err
            user.password = hash
            user
              .save()
              .then((response) => {
                let access_token = createJWT(
                  user.email,
                  user._id,
                  TIMEOUT,
                  process.env.TOKEN_SECRET
                )
                let refresh_token = createRefreshJWT(
                  user.email,
                  user._id,
                  process.env.REFRESH_TOKEN_SECRET
                )
                return res.status(201).json({
                  success: true,
                  access_token: access_token,
                  refresh_token: refresh_token,
                  // message: user,
                })
              })
              .catch((err) => {
                console.log(err)
                res.status(500).json({
                  errors: [{ error: err }],
                })
              })
          })
        })
      }
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({
        errors: [{ error: 'Something went wrong' }],
      })
    })
}

let refreshTokens = []

exports.signin = (req, res) => {
  let { email, password } = req.body

  let errors = []
  if (!email) {
    errors.push({ email: 'required' })
  }
  //   if (!emailRegexp.test(email)) {
  //     errors.push({ email: "invalid email" });
  //   }
  if (!password) {
    errors.push({ passowrd: 'required' })
  }
  if (errors.length > 0) {
    return res.status(422).json({ errors: errors })
  }

  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          errors: [{ user: 'not found' }],
        })
      } else {
        bcrypt
          .compare(password, user.password)
          .then((isMatch) => {
            if (!isMatch) {
              return res
                .status(400)
                .json({ errors: [{ password: 'incorrect' }] })
            }
            let access_token = createJWT(
              user.email,
              user._id,
              TIMEOUT,
              process.env.TOKEN_SECRET
            )

            let refresh_token = createRefreshJWT(
              user.email,
              user._id,

              process.env.REFRESH_TOKEN_SECRET
            )

            refreshTokens.push(refresh_token)

            res.json({
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              type: user.type,
              mobile: user.mobile,
              sports: user.sports,
              yearOfExperience: user.yearOfExperience,
              certificate: user.certificate,
              access_token,
              refresh_token,
              _id: user._id,
            })

            // console.log(res);
          })
          .catch((err) => {
            console.log(err)
            res.status(500).json({ erros: err })
          })
      }
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ erros: err })
    })
}

exports.refresh = (req, res) => {
  //take the refresh token from the user
  const refreshToken = req.body.refresh_token

  //send error if there is no token or it's invalid
  if (!refreshToken) return res.status(401).json('You are not authenticated!')
  if (!refreshTokens.includes(refreshToken)) {
    return res.status(403).json('Refresh token is not valid!')
  }

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    err && console.log(err)
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken)

    const newAccessToken = createJWT(
      user.email,
      user.userId,
      TIMEOUT,
      process.env.TOKEN_SECRET
    )
    const newRefreshToken = createRefreshJWT(
      user.email,
      user.userId,
      process.env.REFRESH_TOKEN_SECRET
    )

    refreshTokens.push(newRefreshToken)

    res.status(200).json({
      access_token: newAccessToken,
      refresh_token: newRefreshToken,
    })
  })

  //if everything is ok, create new access token, refresh token and send to user
}

exports.getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = User.find({_id: id});

    if(!user) res.status(404).json("not found");

    res.status(201).json(user);

  } catch (error) {
    res.status(404).json(error);
  }
};

exports.logout = (req, res) => {
  const refreshToken = req.body.token
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken)
  res.status(200).json('You logged out successfully.')
}
