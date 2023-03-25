const express = require("express");
const path = require("path");
const logger = require("morgan");
require("dotenv").config();
const foodRouter = require("./routes/foodRouter");
const db = require('./config/db');
const app = express();

// express 서버의 포트 지정
app.set("port", process.env.PORT || 3000);


var admin = require("firebase-admin");

// var serviceAccount = require("/utry-d0aaf-firebase-adminsdk-7tshw-fa0522a0a1.json");

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
// });


// express의 미들웨어 설정
// request에 대한 로그를 기록하는 미들웨어
app.use(logger("dev"));
db();
// 정적 파일들을 접근할 수 있도록하는 미들웨어
app.use(express.static(path.join(__dirname, "public")));

// food 라우터
app.use("/food", foodRouter);

// 서버 설정
app.listen(app.get("port"), () => {
    console.log(app.get("port"), "번 포트에서 대기중입니다.");
});

module.exports = app;