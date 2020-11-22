import mongoose from "mongoose";
import dotenv from "dotenv";

import { app } from "./app";
dotenv.config();

const start = async () => {
  const PORT = process.env.PORT || 3000;
  const dbURL = process.env.DB_URL;
  const JWT_KEY = process.env.JWT_KEY;

  if (!PORT || !dbURL || !JWT_KEY) {
    throw new Error("Env variables missing");
  }

  try {
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Connected to MongoDb");
  } catch (error) {
    console.log(error);
  }

  app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
};

start();
