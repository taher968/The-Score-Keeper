//App changed
// var express = require("express");
// var app = express();
// app.set("view engine","ejs");

// app.get("/",function(req,res) {
//     res.render("index")
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Our app is running on port ${ PORT }`);
// });

var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname,'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`The App is listening on port ${PORT}`);
})
