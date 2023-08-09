const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000
// Import Middle-ware's
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const getNumbers = require("./routes/numbers.routes");
app.use(cors());
app.use(express.json());
app.use("/numbers", getNumbers);
app.listen(PORT, () => {
    console.log(`Sever is running on PORT: ${PORT}`);
  })