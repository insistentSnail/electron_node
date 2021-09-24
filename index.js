const express = require('express'); 
const app = express();

app.get("/", (req, res) => {
    res.send("Hello world");
});
app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", " 3.2.1");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use("/update", express.static("./update"));

app.listen(8888, (req, res) => {
    console.log(res);
    console.log("Server is running at http://localhost:8888");
});