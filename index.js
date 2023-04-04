const express = require("express");
const app = express();

app.use(express.static(__dirname + "/src"))

app.get("/", (req, res)=>{
    console.log(__dirname);
    res.sendFile(__dirname + "/src/index.html")
    // "D:/Web/express/src/index.html"
})


app.listen(3000, ()=>{
    console.log("Connected to Server");
})

// localhost:3000/