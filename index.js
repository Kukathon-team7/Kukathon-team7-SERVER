const express = require("express");
const path = require("path");
const logger = require("morgan");
require("dotenv").config();
const indexRouter = require("./routes");

const app = express();

// 세션 설정
const sessionMiddleware = session({
    resave: false,
    saveUninitialized: false,
    secret: `${process.env.COOKIE_SECRET}`,
    cookie: {
        httpOnly: true,
        secure: false,
    },
});

// 탬플릿과 탬플릿 엔진 설정
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// express 서버의 포트 지정
app.set("port", process.env.PORT || 3000);

// express의 미들웨어 설정
// request에 대한 로그를 기록하는 미들웨어
app.use(logger("dev"));

// 정적 파일들을 접근할 수 있도록하는 미들웨어
app.use(express.static(path.join(__dirname, "public")));

// index 라우터
app.use("/", indexRouter);


// error handler
app.use((err, req, res, next) => {
    res.local.message = err.message;
    res.local.error = req.app.get("env") === "development" ? err : {};

    res.status(err.status || 500);
    res.render("error");
});

// 서버 설정
const server = app.listen(app.get("port"), () => {
    console.log(app.get("port"), "번 포트에서 대기중입니다.");
});

module.exports = app;