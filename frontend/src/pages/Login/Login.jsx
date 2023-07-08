import React from 'react'
import './loginStyles.css'
import axios from 'axios'
import { useRef, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const APP_URL = process.env.REACT_APP_API_URL
function Login({ setIsAuthenticated }) {
  const [isSportsOpen, setIsSportsOpen] = useState(false)
  const [isCertificateOpen, setIsCertificateOpen] = useState(false)
  const [selectedSports, setSelectedSports] = useState([])
  const [selectedCertificates, setSelectedCertificates] = useState([])

  const toggleSportsDropdown = () => {
    setIsSportsOpen(!isSportsOpen)
  }

  const toggleCertificateDropdown = () => {
    setIsCertificateOpen(!isCertificateOpen)
  }

  const handleSportSelection = (event) => {
    const sport = event.target.value
    if (event.target.checked) {
      setSelectedSports([...selectedSports, sport])
    } else {
      setSelectedSports(
        selectedSports.filter((selectedSport) => selectedSport !== sport)
      )
    }
  }
  const handleCertificateSelection = (event) => {
    const certificate = event.target.value
    if (event.target.checked) {
      setSelectedCertificates([...selectedCertificates, certificate])
    } else {
      setSelectedCertificates(
        selectedCertificates.filter(
          (selectedCertificate) => selectedCertificate !== certificate
        )
      )
    }
  }
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const loginContainerRef = useRef(null)
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    type: '',
    mobile: '',
    password: '',
    sports: [],
    yearsOfExperience: '',
    certificate: [],
  })
  const [loginData, setLoginData] = useState({
    email: '',
    userName: '',
    password: '',
  })

  const refreshToken = async () => {
    try {
      const res = await axios.post(APP_URL + 'refresh', {
        refresh_token: user.refresh_token,
      })
      setUser({
        ...user,
        access_token: res.data.access_token,
        refresh_token: res.data.refresh_token,
      })
      return res.data
    } catch (err) {
      console.log(err)
    }
  }

  const axiosJWT = axios.create()

  axiosJWT.interceptors.request.use(
    async (config) => {
      let currentDate = new Date()
      const decodedToken = jwt_decode(user.access_token)
      console.log(decodedToken)
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        console.log('access token expired!')
        const data = await refreshToken()
        config.headers['Authorization'] = 'Bearer ' + data.access_token
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  const Signup = async (e) => {
    e.preventDefault()
    console.log('signup details', e.target.value)
    signupData.sports = selectedSports
    signupData.certificate = selectedCertificates
    console.log('signupData', signupData)
    try {
      const res = await axios.post(`http://localhost:5000/api/signup`, {
        email: signupData.email,
        firstName: signupData.firstName,
        lastName: signupData.lastName,
        password: signupData.password,
        mobile: signupData.mobile,
        yearsOfExperience: signupData.yearsOfExperience,
        sports: signupData.sports,
        certificate: signupData.certificate,
      })
      console.log(res)
      const userData = {
        // firstName: res.data.message.firstName,
        // lastName: res.data.message.lastName,
        // email: res.data.message.email,
        access_token: res.data.access_token,
        refresh_token: res.data.refresh_token,
      }

      const stringUserData = JSON.stringify(userData)
      localStorage.setItem('guitaraUser', stringUserData)
      setIsAuthenticated(true)
      setSignupData({
        email: '',
        userName: '',
        password: '',
      })
    } catch (e) {
      console.log(e)
    }
  }

  const Login = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post(`http://localhost:5000/api/signin`, {
        email: loginData.email,
        password: loginData.password,
      })
      console.log(res)
      const userData = {
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        access_token: res.data.access_token,
        refresh_token: res.data.refresh_token,
        userId: res.data._id,
      }

      console.log(userData)
      const stringUserData = JSON.stringify(userData)
      console.log(stringUserData)
      localStorage.setItem('guitaraUser', stringUserData)

      setIsAuthenticated(true)
      setLoginData({
        email: '',
        firstName: '',
        password: '',
      })
    } catch (e) {
      console.log(e)
    }
    navigate('/')
    loginContainerRef.current.value = ''
  }

  const signupInputHandler = (event) => {
    const { name, value } = event.target
    setSignupData((prevData) => {
      return { ...prevData, [name]: value }
    })
  }

  const loginInputHandler = (event) => {
    const { name, value } = event.target
    setLoginData((prevData) => {
      return { ...prevData, [name]: value }
    })
  }

  const tabChange = () => {
    loginContainerRef.current.classList.toggle('right-panel-active')
  }

  return (
    <div className='body-login'>
      <div ref={loginContainerRef} className='login-container' id='container'>
        <div className='form-container sign-up-container'>
          <form className='sign-up-form'>
            <h1>Create Account</h1>
            <div className='social-container'>
              {/* <a href='https://www.facebook.com' className='social'>
                <FacebookIcon />
              </a>
              <a href='https://www.google.com' className='social'>
                <InstagramIcon />
              </a>
              <a href='https://www.linkedin.com' className='social'>
                <LinkedInIcon />
              </a> */}
            </div>
            <input
              value={signupData.firstName}
              onChange={signupInputHandler}
              type='text'
              placeholder='First Name'
              name='firstName'
            />
            <input
              value={signupData.lastName}
              onChange={signupInputHandler}
              type='text'
              placeholder='Last Name'
              name='lastName'
            />
            <input
              value={signupData.email}
              onChange={signupInputHandler}
              type='email'
              placeholder='Email'
              name='email'
            />
            <input
              value={signupData.password}
              onChange={signupInputHandler}
              type='password'
              placeholder='Password'
              name='password'
            />
            <input
              value={signupData.mobile}
              onChange={signupInputHandler}
              type='number'
              placeholder='Mobile'
              min={0}
              max={999999999}
              name='mobile'
            />
            <input
              value={signupData.yearsOfExperience}
              onChange={signupInputHandler}
              type='number'
              min={0}
              max={50}
              placeholder='Years of Experience'
              name='yearsOfExperience'
            />
            <label htmlFor='sports'>Sports:</label>
            <div>
              <input
                type='checkbox'
                id='sports-dropdown-toggle'
                checked={isSportsOpen}
                onChange={toggleSportsDropdown}
              />
              {isSportsOpen && (
                <ul id='sports-dropdown'>
                  <li>
                    <input
                      type='checkbox'
                      id='football'
                      name='sports[]'
                      value='Football'
                      onChange={handleSportSelection}
                    />
                    <label htmlFor='football'>Football</label>
                  </li>
                  <li>
                    <input
                      type='checkbox'
                      id='basketball'
                      name='sports[]'
                      value='Basketball'
                      onChange={handleSportSelection}
                    />
                    <label htmlFor='basketball'>Basketball</label>
                  </li>
                  <li>
                    <input
                      type='checkbox'
                      id='tennis'
                      name='sports[]'
                      value='Tennis'
                      onChange={handleSportSelection}
                    />
                    <label htmlFor='tennis'>Tennis</label>
                  </li>
                </ul>
              )}
            </div>
            <div>
              <label htmlFor='certificates'>Certificates:</label>
              <input
                type='checkbox'
                id='certificate-dropdown-toggle'
                checked={isCertificateOpen}
                onChange={toggleCertificateDropdown}
              />
              {isCertificateOpen && (
                <ul id='certificate-dropdown'>
                  <li>
                    <input
                      type='checkbox'
                      id='certificateone'
                      name='certificate[]'
                      value='certificate one'
                      onChange={handleCertificateSelection}
                    />
                    <label htmlFor='football'>Certificate One</label>
                  </li>
                  <li>
                    <input
                      type='checkbox'
                      id='certificatetwo'
                      name='certificate[]'
                      value='certificate two'
                      onChange={handleCertificateSelection}
                    />
                    <label htmlFor='basketball'>Certificate Two</label>
                  </li>
                  <li>
                    <input
                      type='checkbox'
                      id='certificatethree'
                      name='certificate[]'
                      value='certificate three'
                      onChange={handleCertificateSelection}
                    />
                    <label htmlFor='tennis'>Certificate Three</label>
                  </li>
                </ul>
              )}
            </div>
            <label>
              Type:
              <select
                name='type'
                value={signupData.type}
                onChange={signupInputHandler}
              >
                <option value='coach'>Coach</option>
                <option value='instructor'>Instructor</option>
              </select>
            </label>

            <button type='submit' onClick={Signup}>
              Sign Up
            </button>
          </form>
        </div>
        <div className='form-container sign-in-container'>
          <form>
            <h1>Sign in</h1>
            <div className='social-container'>
              <a href='https://www.facebook.com' className='social'>
                <FacebookIcon />
              </a>
              <a href='https://www.google.com' className='social'>
                <InstagramIcon />
              </a>
              <a href='https://www.linkedin.com' className='social'>
                <LinkedInIcon />
              </a>
            </div>
            <input
              value={loginData.email}
              onChange={loginInputHandler}
              type='email'
              placeholder='Email'
              name='email'
            />
            <input
              value={loginData.password}
              onChange={loginInputHandler}
              type='password'
              placeholder='Password'
              name='password'
            />
            <button onClick={Login}>Sign In</button>
          </form>
        </div>
        <div className='overlay-container'>
          <div className='overlay'>
            <div className='overlay-panel overlay-left'>
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>

              <button className='ghost' id='signIn' onClick={tabChange}>
                Sign In
              </button>
            </div>
            <div className='overlay-panel overlay-right'>
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className='ghost' id='signUp' onClick={tabChange}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
