const mongoose = require("mongoose");
async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://shivam:bG8dppeOuXL0O3XT@learningbackend.ezznnqu.mongodb.net/project-1",
  );
  console.log("MongoDB connected!");
}
module.exports = connectDB;
