const mongoose = require("mongoose");

const videoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },


    videoawsid: {
        type: String
    },
    coverImageid: {
        type: String
    },
    uploadDate: {
        type: String,
    },
 
    price: {
        type: String
    },



})

const Video = mongoose.model("Video", videoSchema)

module.exports = Video