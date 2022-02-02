const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String },
  mobile: { type: Number },
});

module.exports = mongoose.model("user", userSchema);
