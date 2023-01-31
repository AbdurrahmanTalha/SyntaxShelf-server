const express = require('express')
const cors = require('cors');
const morgan = require("morgan")

const app = express();

// * Routes variables
const authRoutes = require("./routes/auth.route")

// * Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'))

app.get("/", (req, res) => {
    res.send("Server is running");
});

// * Use Routers
app.use("/auth", authRoutes);

module.exports = app;
