const app = require("./src/app");
module.exports = app.listen(3000, () => {
  console.log("server is running on port 3000");
});
