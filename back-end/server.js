import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import Videos from "./dbModel.js";

// App config
const app = express();
const port = process.env.PORT || 9000;

// Middlewares
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*"),
    next();
});

// DB config
const connection_url =
  "mongodb+srv://admin:<password>@cluster0.lffvl.mongodb.net/tiktokdb?retryWrites=true&w=majority";

mongoose.connect(connection_url, (err) => {
  if (err) throw err;
  console.log("Connected to MongoDB");
});

// API endpoints
app.get("/", (req, res) => res.status(200).send("Hey there MF")); // Healthcheck API

app.get("/sample/posts", (req, res) => res.status(200).send(data));

// This is to add data to the database
app.post("/real/posts", (req, res) => {
  const dbVideos = req.body;

  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data); // 201 means created
    }
  });
});

// This is to retrieve data from the database
app.get("/real/posts", (req, res) => {
  Videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data); // 200 means ok
    }
  });
});

// Listeners
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
