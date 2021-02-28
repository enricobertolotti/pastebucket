// Import libraries
import express from "express";
import morgan from "morgan";

// Import environment configuration file
import dotenv from "dotenv";
dotenv.config();

// Initialize the express app
const app = express();

// Import routes
app.use(express.urlencoded({ extended: true }));
import routes from "./routes/index.js";

// Use logging
app.use(morgan("dev"));

// Use routes
app.use(routes);

app.listen(process.env.API_PORT, function () {
  console.log("App listening on port 3000");
});
