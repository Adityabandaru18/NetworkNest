const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const axios = require("axios");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const passport = require("passport");


dotenv.config();

const app = express();
const port = process.env.PORT || 500;


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));


app.listen(port,()=>{
console.log(`Server running at the port port`);
})