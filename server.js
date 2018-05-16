// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
const mongoose= require('mongoose');
const bodyParser= require('body-parser')

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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
app.get("/imagesearch/\?title=:title",function(request,response){
const title= request.params.title;
 // offset=
// search=
// count=? better word for count. 
Image.find({title: { "$regex": title, "$options": "i" }},function(err,data){
if (err) console.log(err);
  
  if(data){
  // get image
  Image.updateMany({title: { "$regex": title, "$options": "i" }},{searched: new Date()}).limit(20);
  response.json(data);
  }
  else{
    // some status find page not found.
  response.sendStatus(404);
  }
});  


});

app.post("/",function(request,response){

  const add= request.body
  let date= new Date();
 const newImage= new Image({
imageUrl: add.imageUrl,
title: add.title,
created: date,
searched: date,
source: add.source 
 });
  console.log(request.body);
  newImage.save();
  response.json(newImage); 
});
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
