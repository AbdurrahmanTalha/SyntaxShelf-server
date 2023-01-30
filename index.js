import express from "express";

const app = express();
const port = process.env.PORT || 5000

app.get("/", (req, res) => {
    res.send("SyntaxShelf server is running")
})

app.listen(port, () => {
    console.log(`SyntaxShelf  server is running on ${port}`);
})
