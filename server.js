const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const fs = require("fs");
const sharp = require("sharp");

const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);
const mysql = require("mysql");

const multer = require("multer");
const upload = multer({ dest: "./upload" });

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
});

connection.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  let sql = "SELECT * FROM CUSTOMER WHERE isDeleted = 0";
  connection.query(sql, (err, rows, fields) => {
    res.send(rows);
  });
  //setTimeout 첫번째 인수는 function(){}이나 ()=>{} 이런 함수로 전달해줘야만 작동함
});

//app.use(express.static('public')); >> public 폴더에서 꺼내오라는 뜻
//app.use('/images', express.static(__dirname + '/Images')); >> //Serves all the request which includes /images in the url from Images folder
//app.use('/resources',express.static(__dirname + '/images')); url에 resources가 포함되면 images폴더에서 꺼내오라는 뜻
app.use("/image", express.static("./upload"));

app.post("/api/customers", upload.single("image"), (req, res) => {
  let id = null;
  try {
    filename = req.file.filename;
  } catch (e) {
    filename = "";
  }
  let image = "/image/" + filename;
  let name = req.body.name;
  let department = req.body.department;
  let rank = req.body.rank;
  let email = req.body.email;
  let createdDate = "now()";
  let isDeleted = 0;
  let sql = `INSERT INTO CUSTOMER VALUES (?,?,?,?,?,?,?,?);`;
  let params = [
    id,
    image,
    name,
    department,
    rank,
    email,
    createdDate,
    isDeleted,
  ];
  // let params = [id, image, name, department, rank, email];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
    // if (err) throw err;
  });
});

app.delete("/api/customers/:id", (req, res) => {
  let sql = "UPDATE CUSTOMER SET isDeleted = 1 WHERE id = ?";
  let params = [req.params.id];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
