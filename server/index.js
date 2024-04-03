import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import route from "./Routes/UserRoutes.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());
// app.use(express.json());

app.use("/api", route);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
