const User = require("../models/User");

exports.signupService = async (user) => {
    const result = await new User(user).save()
    return result
}
