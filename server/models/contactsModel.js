const mongoose = require("mongoose");

const contactsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Must provide a name"],
      trim: true,
      maxlength: [30, "Name can not be more than 30 characters"],
    },
    gender: {
      type: String,
      required: [true, "Must provide a gender"],
      trim: true,
    },
    number1: {
      type: Number,
      required: [true, "Must provide a phone number"],
      trim: true,
      maxlength: [12, "Phone number can not be more than 12 characters"],
    },
    number2: {
      type: Number,
    },
    org: {
      type: String,
    },
    email: {
      type: String,
    },
    city: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("contact", contactsSchema);
