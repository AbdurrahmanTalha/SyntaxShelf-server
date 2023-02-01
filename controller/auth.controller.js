const authServices = require("../services/auth.service");
const { hashPassword, generateInfo } = require("../utils/auth");

exports.register = async (req, res) => {
    try {
        req.body.password = await hashPassword(req.body.password)
        const user = await authServices.signupService(req.body);
        const token = await generateInfo(user);
        
        res.status(200).json({
            status: 200,
            message: "Successfully created user",
            data: {
                user: {
                    name: user.name,
                    email: user.email
                },
                token
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: "Couldn't create user",
            error: error.message
        })
    }
}
