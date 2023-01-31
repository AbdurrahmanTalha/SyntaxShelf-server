const mongoose = require("mongoose")
const express = require('express')
const cors = require('cors');

const app = express();

// * Routes variables
const authRoutes = require("./routes/auth.route")

// * Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Server is running");
});

// * Use Routers
app.use("/auth", authRoutes);

module.exports = app;
