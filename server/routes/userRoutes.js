import express from "express";
import { Register, Login } from "../Controllars/User.js";

const route = express.Router();

route.post("/register", Register);
route.post("/login", Login);
route.get("/", (req, res) => {
  res.send("Goole");
});

export default route;
