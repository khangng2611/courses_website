const mongoose = require('mongoose');

async function connect () {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/f8_education_dev');
        console.log("Successful Connection")
    } catch (error) {
        console.log("Failed Connection")
    }
}

module.exports = { connect }
