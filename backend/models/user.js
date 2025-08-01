import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstname:{
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        default: "NOT GIVEN"
    },
    isBlocked:{
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        default: "user"
    },
    isEmailVerified: {
        type: Boolean,
        default: false
    },
    image: {
        type: String,
        default: "https://digitalhealthskills.com/wp-content/uploads/2022/11/3da39-no-user-image-icon-27.png"
    }
})

const User = mongoose.model("users", userSchema)

export default User;