//Imports
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { chatGpt } = require("./routes/router.js");
const mysql = require('mysql');

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

const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
});

connection.connect(function (err) {
    if (err) {
        console.error('Error connecting to database:', err.stack);
        return;
    }
    console.log('Connected to database!');
});

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
