var express = require("express"); 

// set up express 
var app = express(); 
var PORT = 3000; 

app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 





app.listen (PORT, function(){ 
    console.log("I'm listening at " + PORT); 
})