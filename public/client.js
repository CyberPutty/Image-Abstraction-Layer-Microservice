

const form= document.getElementById("image");


form.on('submit',function(){ 
  
const imageUrl= document.getElementById('imageUrl');
const title= document.getElementById('title');
const source= document.getElmentById('source');
$.post("/server.js",{imageUrl: imageUrl, title: title, source: source},function(err,data){
if (err) console.log(err);
  if (data=="done"){
  console.log('success');
  }

});

});