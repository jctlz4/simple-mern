const express = require("express");
const server = express();
const articleRouter = require("./article/router");
const mongoose = require("mongoose");

const PORT = process.env.port || 3000;
server.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}`)
);

// to format requests into JSON
server.use(express.json());
// to correctly get the information from submissions
server.use(express.urlencoded({ extended: false }));

server.use("/articles", articleRouter);

mongoose.connect(`mongodb://localhost:27017/simple-mern-blog`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => console.log("MongoDB connection established."));
