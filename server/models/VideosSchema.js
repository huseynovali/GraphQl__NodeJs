const mongoose = require("mongoose");

// Video Şeması
const VideoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
});

// Video Modeli
const VideoModel = mongoose.model('Video', VideoSchema);

module.exports = VideoModel;
