const app = require("./app");
const PORT = process.env.PORT || 8787;
app.listen(PORT, () => {
  console.log("HeyTea proxy server running at http://localhost:");
});
