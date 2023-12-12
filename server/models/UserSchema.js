const mongoose = require("mongoose");

// User Şeması
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    videos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video",
        },
    ],
});

// User Modeli
const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
