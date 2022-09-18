var express = require('express');
var app = express();
app.get("/",(req,res)=>{
    res.send("Manchidi")
})
app.listen(process.env.PORT)