const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect("mongodb+srv://admin:NHMQKFNfTHYbgwvo@cluster0.25kozn1.mongodb.net/?retryWrites=true&w=majority")
    .then(() => 
        app.listen(3000,()=>console.log("Connected and listening to port 3000")))
    .catch(err => console.log(err));