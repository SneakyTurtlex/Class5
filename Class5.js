var num = document.getElementById("num");
var Disp = document.getElementById("display");
var answer = Math.round(Math.random()*100);
var score = 100;
document.getElementById("guess").addEventListener("click", function(){
    console.log(num.value);
    var realNum = parseInt(num.value);
    if(num.value == 5){
        Disp.innerHTML = "Correct";
    } else {
        Disp.innerHTML = "False";
    }
    if (realNum == answer){
        Disp.innerText = "you are correct Score: "+score;
    } else {
        if(realNum > answer){
            Disp.innerText = "Too big";
        } else if(realNum < answer){
            Disp.innerText = "Too small";
        }
        score = score - 1;
    }
});