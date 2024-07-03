import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import router from '../server/routes/userRoute.js'


// Create an instance of Express app
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());
dotenv.config();
app.use(cors());
app.use('/api',router)

const MONGOURL = process.env.MONGO_URL;

// Routes
app.get("/", (req, res) => {
  res.send("API is working");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

mongoose
  .connect(MONGOURL)
  .then((res) => {
    console.log("Mongodb atlas connected");
  })
  .catch((err) => {
    console.log("connection failed");
    console.log(err);
  });
