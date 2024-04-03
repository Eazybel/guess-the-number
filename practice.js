const para = document.getElementById("para");
const btn = document.getElementById("btn");
btn.onclick= function (){
const guess =  window.prompt("Guess the number between 0 t0 10");
   let answer=  Math.floor(Math.random()*10);
   

   if (guess==answer) {

    para.textContent = "correct";
   }else if(guess > answer){
     para.textContent = "Too high Try Gain!";
  }else if(guess < answer){
    para.textContent = "Too low Try Gain!";
 }
}