// import Dependencies
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/apiRoutes.js")
const htmlRoutes = require("./routes/htmlRoutes")

// Setting up Express App
const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan("dev"));

// Make getting input from a request (Frontend /Browser - Form)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// db mongo
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workoutdb";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
})

// Create route
app.use(apiRoutes)
app.use(htmlRoutes)

// Starts the server to begin listening
app.listen(PORT, function(){
    console.log(`App listening on Port ${PORT}!`);
});