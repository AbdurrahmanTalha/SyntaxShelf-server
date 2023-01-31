const express = require("express")

const controller = require("../controller/auth.controller");

const router = express.Router()

router.get("/users", controller.users)

module.exports = router
