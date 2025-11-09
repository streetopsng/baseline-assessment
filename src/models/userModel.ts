import mongoose from "mongoose";

const UserCarSchema = new mongoose.Schema(
  {
    carName: {
      type: String,
      required: true,
      trim: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
  },
);

export const User =  mongoose.models.users ||
  mongoose.model("users", UserCarSchema);
