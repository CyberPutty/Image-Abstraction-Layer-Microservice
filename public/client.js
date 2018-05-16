


let form= document.getElementById("image");


  form.addEventListener("click",function(){ 

    let imageUrl= document.getElementById('imageUrl').value;
    let source= document.getElementById('source').value;
    let title= document.getElementById('title').value;
    // set form await form to send to fetch? 
    let imageData= {imageUrl: imageUrl, title: title, source: source}
  
    sendForm(imageData);
      
  console.log(document.getElementById('imageUrl').value);
  

});

function sendForm(data){
  
    
  fetch('https://super-pruner.glitch.me/',{
    method: 'POST',
    body: JSON.stringify(data)
  }).then(resp=> console.log("success"));
  

}