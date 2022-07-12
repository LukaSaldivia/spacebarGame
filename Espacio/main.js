const bar = document.getElementsByClassName("bar2");
let score = 0;
let scoreMod = document.getElementById("score"); //score modificable con css
let rankMod = document.getElementById("rank"); //rank modificable con css
let lilBar = document.getElementById("lilBar");
const timeMaster = 5;
let time = timeMaster;
var TimeGame;

document.getElementById("time").innerHTML=time;
  


document.onkeyup = function(e) {
  let keyPress = e;
  
  if(keyPress.key == ' ' && time > 0){ //Si presiona el espacio
    
    score++; // suma 1 por cada spacebar
    console.log(score/timeMaster + " clics por segundo");


    if (score==1){
    TimeGame = setInterval(Countdown,1000);
    }
    var rank = ( //clasificación de rank
      68*(score>-1 && score<20) // D
      +67*(score>19 && score<40) // C
      +66*(score>39 && score<60) // B
      +65*(score>59 && score<80) // A
      +83*(score>79) // S
    )

    

    document.getElementById("score").innerHTML = score;
    document.getElementById("rank").innerHTML = String.fromCodePoint(rank);
    
    //D Cambio de color
    if(rank==68){
      rankMod.style.color="rgb(251, 255, 0)";
      rankMod.style.textShadow="0 0 12px rgb(251, 255, 0)"
      lilBar.style.backgroundColor="rgb(251, 255, 0)";
      scoreMod.style.color="rgb(251, 255, 0)";

      for(let i = 0; i < bar.length; i++){
        bar[i].style.backgroundColor = "rgb(251, 255, 0)";
        bar[i].style.boxShadow = "0px 0px 20px 0px rgb(251, 255, 0)";
    }
  }


    //C Cambio de color
    if(rank==67){
      rankMod.style.color="rgb(0, 119, 255)";
      rankMod.style.textShadow="0 0 12px rgb(0, 119, 255)"
      lilBar.style.backgroundColor="rgb(0, 119, 255)";
      scoreMod.style.color="rgb(0, 119, 255)";

      for(let i = 0; i < bar.length; i++){
        bar[i].style.backgroundColor = "rgb(0, 119, 255)";
        bar[i].style.boxShadow = "0px 0px 20px 0px rgb(0, 119, 255)";
    }
  }

  //B Cambio de color
  if(rank==66){
    rankMod.style.color="rgb(0, 255, 255)";
    rankMod.style.textShadow="0 0 12px rgb(0, 255, 255)"
    lilBar.style.backgroundColor="rgb(0, 255, 255)";
    scoreMod.style.color="rgb(0, 255, 255)";

    for(let i = 0; i < bar.length; i++){
      bar[i].style.backgroundColor = "rgb(0, 255, 255)";
      bar[i].style.boxShadow = "0px 0px 20px 0px rgb(0, 255, 255)";
  }
}

  //A Cambio de color
  if(rank==65){
    rankMod.style.color="rgb(255, 0, 0)";
    rankMod.style.textShadow="0 0 12px rgb(255, 0, 0)"
    lilBar.style.backgroundColor="rgb(255, 0, 0)";
    scoreMod.style.color="rgb(255, 0, 0)";

    for(let i = 0; i < bar.length; i++){
      bar[i].style.backgroundColor = "rgb(255, 0, 0)";
      bar[i].style.boxShadow = "0px 0px 20px 0px rgb(255, 0, 0)";
  }
}

  //S Cambio de color
  if(rank==83){
    rankMod.style.color="rgb(255, 0, 170)";
    rankMod.style.textShadow="0 0 12px rgb(255, 0, 170)"
    lilBar.style.backgroundColor="rgb(255, 0, 170)";
    scoreMod.style.color="rgb(255, 0, 170)";

    for(let i = 0; i < bar.length; i++){
      bar[i].style.backgroundColor = "rgb(255, 0, 170)";
      bar[i].style.boxShadow = "0px 0px 20px 0px rgb(255, 0, 170)";
  }
}

    setTimeout(function(){ //sube y baja de bar2
      for(let i = 0; i < bar.length; i++){
      bar[i].style.height = "0px";
    }},60);
    for(let i = 0; i < bar.length; i++){
      bar[i].style.height = "400px";
      
    }
 } 
 if(keyPress.key == "Enter"){
   window.location.reload();
 }
}



function Countdown(){
  if (time > 0){
  time--;
  document.getElementById("time").innerHTML=time;
  } else {
    document.getElementById("texto").innerHTML='Pulsa la tecla "Enter" para reiniciar';
    clearInterval(TimeGame);
    alert("Hiciste "+ score/timeMaster + " clics por segundo");
  }
}