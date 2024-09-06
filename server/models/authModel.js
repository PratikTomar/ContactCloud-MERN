const mongoose = require("mongoose");

const authSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Must provide a name"],
      trim: true,
      maxlength: [30, "Name can not be more than 30 characters"],
    },
    email: {
      type: String,
      required: [true, "Must provide a email"],
      trim: true,
      maxlength: [30, "Email can not be more than 30 characters"],
    },
    password: {
      type: String,
      required: [true, "Must provide a password"],
      trim: true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("auth", authSchema);
