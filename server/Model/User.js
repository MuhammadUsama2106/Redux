import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

export default User;
