

const form= $("#image");

console.log(form);
form.click(function(){ 
  console.log(form);
const imageUrl= $('#imageUrl').val();
const title= $('#title').val();
const source= $('#source').val();
 console.log(imageUrl); 
// $.post("/server.js",{imageUrl: $imageUrl, title: $title, source: $source},function(err,data){
// if (err) console.log(err);
//   if (data=="done"){
//   console.log('success');
//   }

// });

});