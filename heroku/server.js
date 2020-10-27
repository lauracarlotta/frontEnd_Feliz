const { Console } = require("console");
const { response } = require("express");
const express = require("express"); 
const app = express();

app.get("/", (request, response) => {
    response.send('<span style="color: #F00;">Hello World!</span>');
})

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
})
