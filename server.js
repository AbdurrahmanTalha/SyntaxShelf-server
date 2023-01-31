const mongoose = require("mongoose");
require("dotenv").config();
require("colors")

const app = require("./app")

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log(`Database connection is successful`.red.bold);
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Syntax Shelf is running on port ${port}`.yellow.bold);
});
