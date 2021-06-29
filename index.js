//document.querySelector("button").addEventListener("click",clickme);

a=document.getElementsByTagName("button");
for (i=0;i<a.length;i++){
  document.getElementsByTagName("button")[i].addEventListener("click",function(){
    var alp=this.innerHTML;
    console.log(alp);
    switch(alp){
      case "w":
      var audio=new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
      case "a":
      audio=new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
      case "s":
      audio=new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
      case "d":
      audio=new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

      case "j":
      audio=new Audio("sounds/snare.mp3");
      audio.play();
      break;
      case "k":
      audio=new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
      case "l":
      audio=new Audio("sounds/crash.mp3");
      audio.play();
      break;

      default:
      alert("Please press right button");
      break;

    }


  });
}

document.addEventListener("keypress",function(event){console.log(event.key);
    switch(event.key){
      case "w":
      var audio=new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

      case "a":
      audio=new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
      case "s":
      audio=new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
      case "d":
      audio=new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
      case "j":
       audio=new Audio("sounds/snare.mp3");
      audio.play();
      break;
      case "k":
      audio=new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
      case "l":
      audio=new Audio("sounds/crash.mp3");
      audio.play();
      break;

      default:
      alert("Please press right button");
      break;



    }



});
