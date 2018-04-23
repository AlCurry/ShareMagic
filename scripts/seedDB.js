const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the homes collection and inserts the homes below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {
    useMongoClient: true
  }
);

const homeSeed = [
  {
    title: "Joe's Beach House",
    owner: "Joe Go Joe",
    address: "345 Ocean Drive",
    date: new Date(Date.now())
  },
  {
    title: "Mel's Beach House",
    owner: "Swell Mel",
    address: "666 Shore Drive",
    date: new Date(Date.now())
  },
  {
    title: "Barbie's Beach House",
    owner: "Barbie Doll",
    address: "123 Altantic Walk",
    date: new Date(Date.now())
  },
  {
    title: "Darth's Beach House",
    owner: "Darth Vadar",
    address: "321 Star War Street",
    date: new Date(Date.now())
  },
  {
    title: "Giphy's Beach House",
    owner: "Mr. Gif API",
    address: "789 Gif Shore Ave",
    date: new Date(Date.now())
  }
];

db.Home.remove({})
  .then(() => db.Home.collection.insertMany(homeSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
