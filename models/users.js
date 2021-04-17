const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true

    },
    field:{
        type: String,
        required: true
    },
    interest:{

    },
    verified:{
        type: Boolean
    }
},{
    timestamps: true
});

const User= mongoose.model("User",userSchema);
module.exports = User;