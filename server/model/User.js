const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    reqired: true,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;