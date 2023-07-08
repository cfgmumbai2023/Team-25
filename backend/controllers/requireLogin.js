const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const USER = mongoose.model("User")

module.exports = (req, res, next) => {
    
    const { authorization } = req.headers;
    
    if (!authorization) {
        return res.status(401).json({ error: "You are not authenticated" })
    }
    const token = authorization.replace("Bearer ", "")
    // const token = authorization
    jwt.verify(token, process.env.TOKEN_SECRET, (err, payload) => {
        if (err) {
            console.log(err)
            return res.status(403).json({ error: "Token invalid" })
        }
        // console.log(payload)
        const { userId } = payload
        USER.findById(userId).then(userData => {
            req.user = userData        
            next()
        })
    })
}