const path = require("path");
const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

console.log("process.env.NODE_ENV", process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "../client", "dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "dist", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Server is running on ${PORT} port.`));
