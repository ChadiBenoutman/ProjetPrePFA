/*maryem */
const cors = require("cors");
app.use(cors());
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const shopRoutes = require("./Routes/shops");

app.use(express.json());
app.use("/api/shops", shopRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/yourDBName")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.listen(3000, () => console.log("Server running on port 3000"));
