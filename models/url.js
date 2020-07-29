const mongoose = require("mongoose")

const urlSchema = new mongoose.Schema({
    long: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
    },
    urlCode: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Url', urlSchema)