const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
require("dotenv").config()

exports.hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12, (err, salt) => {
            if (err) reject(err)
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) {
                    reject(err)
                }
                resolve(hash)
            })
        })
    })
}

exports.comparePassword = (password, hashed) => {
    return bcrypt.compare(password, hashed)
}

exports.generateInfo = async (userInfo) => {

    const token = jwt.sign({ id: userInfo._id, email: userInfo.email, role: userInfo.role }, process.env.TOKEN_SECRET, {
        expiresIn: "7days"
    });
    return token;
}
