var mongoose = require("mongoose");
var contactSchema = mongoose.Schema({
    FirstName: String,
    LastName: String,
    DOB: String,
    Phone: String,
    Address: String,
    Notes: String,
});

module.exports = mongoose.model("contact", contactSchema);