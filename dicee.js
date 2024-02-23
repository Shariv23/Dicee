var randomNum = Math.random();
randomNum=randomNum*6+1;
randomNum=Math.floor(randomNum);
var res="images/dice" +randomNum +".png";
console.log(res);
document.querySelector(".img1").setAttribute("src",res);
console.log(res);

var randomNum2 = Math.random();
randomNum2=randomNum2*6+1;
randomNum2=Math.floor(randomNum2);
var res2="images/dice" +randomNum2 +".png";
console.log(res2);
document.querySelector(".img2").setAttribute("src",res2);
console.log(res2);

if (randomNum>randomNum2){
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";
}
else if (randomNum<randomNum2){
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").textContent = "🔃 Draw!";
}