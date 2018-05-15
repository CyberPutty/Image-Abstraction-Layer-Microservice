// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
const mongoose= require('mongoose');

mongoose.connect(process.env.MONGO_URI);

const schema= mongoose.Schema;


const imageSchema= new schema({
image: String,
title: String,
searched: Date,
source: String, 
});
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.
const Image= mongoose.model('Image',imageSchema);
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
app.get("/imagesearch/type=:image,offset",function(request,response){
const imageUrl= request.params.image;
 // offset=
// search=
// count=? better word for count. 
Image.findOne(imageUrl,function(err,data){
if (err) console.log(err);
  
  if(data){
  // get image
  
  }
  else {
// create data
    
    const search= new Image({
    
    
    
    });
    
  }

});  


});

app.post("/",function)
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
