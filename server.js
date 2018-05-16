// server.js
// where your node app starts
// TODO needs to update many with new search date. second needs to have different endpoint for latest. 
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
app.get("/new", function (request, response) {
  response.sendFile(__dirname + '/views/new.html');
});

// ? optional parameter still retain param assignment?

app.get("/imagesearch/",function(request,response){

const title= request.query.title;
const offset= request.query.offset;
  console.log(offset);
 // offset=
// search=
// count=? better word for count. 
Image.updateMany({title: { "$regex": title, "$options": "i" }},{searched: new Date()}).limit(Number(offset)).then(function(data){
  if(data){
  // get image
  Image.find({title: { "$regex": title, "$options": "i" }}).limit(Number(offset)).exec(function(err, data){
  if (err) console.log(err);
    response.json(data);
  
  });
  }
  else{
    // some status find page not found.
  response.sendStatus(404);
  }
  
});  


});

app.get("/latest",function(req,resp){

  

    
Image.find({}).sort({searched: "desc"}).limit(1)
.then(function(max){
console.log(max);
  Image.find({searched: max[0].searched},function(err,data){
if (data){
    resp.json(data);
    }
    else{
    resp.send("NO DATA");
    }  
  });

});

});

app.post("/new",function(request,response){
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
