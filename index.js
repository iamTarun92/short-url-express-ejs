const express = require("express");
const path = require("path");
const { connectMongoDb } = require("./connection");
const { mongoURI } = require("./config");
const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");

const app = express();
const port = 8000;

connectMongoDb(mongoURI)
  .then(() => console.log("MongoDB server is running on " + mongoURI))
  .catch((error) => console.log(error));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.static(path.join(__dirname, "public")));

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies

// Routes
app.use("/", staticRoute);
app.use("/url", urlRoute);

app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`);
});
