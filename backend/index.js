var express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const PORT = 3005;

app.use(function (req, res) {
  res.status(404).json("err: Page not found");
});

app.listen(PORT, () => {
  console.log("app is running on port " + PORT);
});
