// const http = require("http");
// const app = http.createServer((req, res) => {
//   res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});
//   if (req.url === '/') {
//     res.end("여기는 루트 입니다.");
//   } else if (req.url === '/login') {
//     res.end("여기는 로그인 화면입니다.");
//   }
// });

// app.listen(3001, () => {
//   console.log("http로 가동된 서버입니다.");
// });

const express = require("express");
const app = express();

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home/index");       // views에서 ./views로 설정해두었기 때문에 바로 home부터 시작
});

app.get("/login", (req, res) => {
  res.render("home/login");
});

app.listen(3000, () => {
  console.log("서버 가동");
});