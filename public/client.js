


let form= document.getElementById("image");


  form.addEventListener("click",function(){ 

    let imageUrl= document.getElementById('imageUrl').value;
    let source= document.getElementById('source').value;
    let title= document.getElementById('title').value;
    // set form await form to send to fetch? 
    if(imageUrl.match()&&source.match()&&){
    
    
    }
    
    let imageData= {imageUrl: imageUrl, title: title, source: source}
  console.log(imageData);
    $.post('https://super-pruner.glitch.me/',imageData,function(data){
    if (data){ console.log("success");}
    });
      
  
  

});

