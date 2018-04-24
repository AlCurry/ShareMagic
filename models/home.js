const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const homeSchema = new Schema({
  title: { type: String, required: true },
  owner: { type: String, required: true },
  address: String,
  bedrooms: Number,
  bathrooms: Number
});

const Home = mongoose.model("Home", homeSchema);

module.exports = Home;
