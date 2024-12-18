let userElement=document.getElementById('userInput')
let gameResult1=document.getElementById("gameResult")
let randomNumber=Math.ceil(Math.random()*100)
//console.log(randomNumber)
function checkGuess() {
    
    if(parseInt(userElement.value)==randomNumber) {
        gameResult1.textContent="congratulationals! You got it right";
        gameResult1.style.backgroundColor='green'
    }
    else if (parseInt(userElement.value)>randomNumber) {
        gameResult1.textContent="YOU ARE TO HIGH! PLEASE TRY AGAIN!";
        gameResult1.style.backgroundColor='#FF1493'
    }

    else if (parseInt(userElement.value)<randomNumber) {
        gameResult1.textContent="YOU ARE TO Low! PLEASE TRY AGAIN!";
        gameResult1.style.backgroundColor='green'
        //gameResult1.style.color='black'
    }
    else {
        gameResult1.textContent="PLEASE PROVIDE VALID INFORMATION!";
        gameResult1.style.backgroundColor='red'   
    }
    
    
}