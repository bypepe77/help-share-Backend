const mongoose = require("mongoose");

const { Schema } = mongoose;
const UserSchema = new Schema(
  {
    name: { type: String },
    surname: { type: String },
    username: { type: String },
    hashedPassword: { type: String },
    description: { type: String }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);
const User = mongoose.model("User", UserSchema);

module.exports = User;
