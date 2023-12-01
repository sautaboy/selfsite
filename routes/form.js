var mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/selfsite-db")

const userSchema = new mongoose.Schema({
    fullname: String,
    phone: Number,
    email: String,
    address: String,
    message: String,
})

module.exports = mongoose.model('User', userSchema);

