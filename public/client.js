


let form= document.getElementById("image");


  form.addEventListener("click",function(){ 

    
    let imageUrl= document.getElementById('imageUrl').value;
    let source= document.getElementById('source').value;
    let title= document.getElementById('title').value;
    
    fetch('https://super-pruner.glitch.me/',{
    method: 'POST',
    body: {imageUrl: imageUrl, title: title, source: source}
  
  }).then(resp=> console.log("success"));
    
    
  console.log(document.getElementById('imageUrl').value);
  

});



function sendForm(){

}