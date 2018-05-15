// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
const mongoose= require('mongoose');
const bodyParser= require('body-parser');

mongoose.connect(process.env.MONGO_URI);

const schema= mongoose.Schema;


const imageSchema= new schema({
imageUrl: String,
title: String,
created: Date,
searched: Date,
source: String, 
});
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.
const Image= mongoose.model('Image',imageSchema);
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.use(bodyParser.urlEncoded({extended: false}));
app.use(bodyParser.json());



// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
app.get("/imagesearch/type=:image,offset=:offset",function(request,response){
const imageUrl= request.params.image;
 // offset=
// search=
// count=? better word for count. 
Image.find(imageUrl,function(err,data){
if (err) console.log(err);
  
  if(data){
  // get image
//
  data.update({searched: new Date().now}).limit(20);
  response.json(data);
  }
  else{
    // some status find page not found.
  response.sendStatus(404);
  }
});  


});

app.post("/",function(request,response){
// create entry
  const add= request.params;
  const date= new Date();
 const newImage= new Image({
imageUrl: add.url,
title: add.title,
created: date.now,
searched: date.now,
source: add.source 
 });
  newImage.save();
  response.json(newImage); 
});
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
