require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/db/db");
connectDB();
module.exports = app.listen(3000, () => {
  console.log("server is running on port 3000");
});
