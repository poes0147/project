const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

app.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});

app.get("/hello", (req, res) => {
  console.log(req.url);
  res.send("Hello World!");
});

app.get("/api/board", (req, res) => {
  res.send({ title: "노드 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ" });
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "./public", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
