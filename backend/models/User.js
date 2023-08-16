const mongoose = require("mongoose");

// Step 1 :require mongoose
// Step 2 :Create a mongoose schema 
// Step 3 : Create a model

const User = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        private: true,
    },
    lastName: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    likedSongs: {
      
        type: String,
        default: "",
    },
    likedPlaylists: {
        
        type: String,
        default: "",
    },
    subscribedArtists: {
        
        type: String,
        default: "",
    },
});

const UserModel = mongoose.model("User", User);

module.exports = UserModel;