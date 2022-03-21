const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Welcome home")
})

app.listen(PORT, () => {
    console.log("App listening on port " + PORT)
})
