const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      require: [true, "First Name is required"],
    },
    last_name: {
      type: String,
      require: [true, "Last name is required"],
    },
    email: {
      type: String,
      require: [true, "email is required"],
    },
    gender: {
      type: String,
      require: [true, "gender is required"],
    },
    avatar: {
      type: String,
      require: [true, "image is required"],
    },
    domain: {
      type: String,
      require: [true, "domain is required"],
    },

    available: {
      type: String,
      require: [true, "available is required"],
    },
  },
  { timestamps: true } //user create time
);

const userModel = mongoose.model("User", userSchema); //user collection name(table)

module.exports = userModel;
