var express = require("express");
var app = express();
var route = require("./route/route.js");

//模版引擎
app.set("view engine", "ejs");
//静态资源管理
app.use(express.static("./public"));

//路由
app.get("/", route.showIndex);
app.get("/addstudent", route.addstudent);
app.get("/allstudent", route.allstudent);

app.listen(8000, "127.0.0.1");
console.log("Running at http://127.0.0.1:8000");












