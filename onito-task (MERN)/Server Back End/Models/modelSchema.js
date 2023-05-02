const mongoose = require("mongoose");
const Employee = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  guardian_label: {
    type: String,
    required: true,
  },
  guardian_name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  Country: {
    type: String,
    required: true,
  },
  dob: {
    type: Number,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  id_type: {
    type: String,
    required: true,
  },
  govt_id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact_number: {
    type: Number,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  religion: {
    type: String,
    required: true,
  },
  martial_status: {
    type: String,
    required: true,
  },
  blood_group: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Users", Employee);
