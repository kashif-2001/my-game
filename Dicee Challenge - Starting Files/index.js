
var randomnum1=Math.floor(Math.random()*6)+1;

var randomDiceImg="dice" + randomnum1 + ".png";

var randomImgSource="images/" + randomDiceImg;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImgSource);


var randomnum2=Math.floor(Math.random()*6)+1;

var randomImgSource2="images/dice" + randomnum2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImgSource2);

if(randomnum1>randomnum2){
    document.querySelector("h1").innerHTML="Player 1 is wins";
}else if(randomnum2>randomnum1){
    document.querySelector("h1").innerHTML="Player 2 is wins";
}else{
    document.querySelector("h1").innerHTML="Match Draw";
}


   

