//Imports
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { chatGpt } = require("./routes/router.js");

//Uses
const app = express();
app.use(
    cors({
        origin: [
            "http://127.0.0.1:5500",
        ],
        credentials: true,
    })
);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Listen
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});

app.get('/', (req, res) => {
    console.log("came")
    res.send("thabnks")
});

//Use routes
app.use("/chatgpt", chatGpt);
