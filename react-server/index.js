var express = require("express");
var cors = require("cors");
var mysql = require("mysql");

var app = express();

var connection = mysql.createConnection({
  host: "localhost",
  user: "lavin105",
  password: "Lavin105@m.c.edu",
  database: "React_Blog"
});
app.use(cors());

connection.connect(err => {
  if (err) {
    return res.send(err);
  } else {
    console.log("Connection successful");
  }
});

app.get("/", (req, res, next) => {
  res.send("visit /post to see the post json");
});
app.get("/posts", (req, res) => {
  connection.query("SELECT * FROM posts", (err, result) => {
    if (err) {
      res.send("Cannot display data");
    } else {
      res.json(result);
    }
  });
});

app.get("/posts/add", (req, res) => {
  const { title, author, body } = req.query;

  connection.query(
    `INSERT INTO posts(title, author, body) VALUES('${title}','${author}','${body}')`,
    err => {
      if (err) {
        res.send("Failed to add record");
      } else {
        res.send("Record successfully added");
      }
    }
  );
});
app.listen(8080, () => {
  console.log("Server started on port 8080");
});
