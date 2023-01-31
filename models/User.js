const mongoose = require('mongoose');
const validator = require("validator");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Give a name"],
        minLength: [3, "Please Give a name longer than 3 letters"],
        maxLength: [20, "Please Give a name less than 20 letters"],
        trim: true,
        unique: [true, "Name already exists, Choose a different Name"]
    },
    email: {
        type: String,
        validate: [validator.isEmail, "Please provide a valid Email"],
        required: [true, "Please Give a Email"],
        unique: [true, "Email already exists, Choose a different Email"]
    },
    password: {
        type: String,
        required: [true, 'Please provide a valid password'],
        validator: (value) =>
            validator.isStrongPassword(value, {
                minLength: 6,
                minLowercase: 3,
                minNumbers: 1,
                minUppercase: 1,
                minSymbol: 1,
            }),
        message: "Password {VALUE} is not strong enough"
    },
    address: {
        type: String,
        trim: true
    },
    role: {
        type: String,
        default: "User"
    }
}, { timestamps: true })

const user = mongoose.model("User", userSchema);

module.exports = user;
