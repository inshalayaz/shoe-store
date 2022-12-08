const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
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