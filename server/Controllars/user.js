import express from "express";
import User from "../Model/User.js";

export const Register = async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    const Newuser = new User({
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
    });

    const savedUser = await Newuser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    "Data not Saved", error;
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("Please provide email and password");
    }
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send("User not found");
    }
    res.status(200).send(user);
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).send("Internal server error");
  }
};
