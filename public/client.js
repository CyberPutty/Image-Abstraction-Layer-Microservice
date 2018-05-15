
$(document).ready(function(){


var form= $("#image");
console.log(form);

  form.click(function(){ 
  console.log(form);
var imageUrl= $('#imageUrl').val();
  console.log(imageUrl); 
var title= $('#title').val();
var source= $('#source').val();
 
// $.post("/server.js",{imageUrl: $imageUrl, title: $title, source: $source},function(err,data){
// if (err) console.log(err);
//   if (data=="done"){
//   console.log('success');
//   }

// });

});


});
