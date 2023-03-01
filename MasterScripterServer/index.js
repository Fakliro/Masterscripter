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
        ],
        credentials: true,
    })
);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Connect the Database
// connectDB().then(() => {
//   console.log("*************Connected to DB successfully***************");
// });

//Listen
const port = 3001;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

//Use routes
app.use("/chatgpt", chatGpt);
