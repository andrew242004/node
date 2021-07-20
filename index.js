var express = require("express");//scrip
var app = express();
var port =5000;
app.listen(port,function (){
    console.log("server is running...");
});
app.get("/",function (req,res){
    res.sendFile(__dirname+"/public/cvxinviec.html");
});
app.get("/ke-toan",function (req,res){
    res.send("Xin chao, vui long nop tien...");
});
app.get("/chi-tiet",function (req,res){
res.render("chitiet");
});