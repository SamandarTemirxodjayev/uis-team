const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
  email: {
    type: String,
  }
});
const Emails = mongoose.model("emails", emailSchema);

module.exports = Emails;
