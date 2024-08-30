let time = 30;
let point = 0;
var newNum;

function randomBubbles() {
    var allBubble = "";
    for (var i = 0; i < 126; i++) {
        allBubble += `<div class="bubble">
                    ${Math.floor(Math.random() * 10)}
                    </div>`;
    }

    document.querySelector("#game").innerHTML = allBubble;
}

function timer() {

    var intvl = setInterval(function () {
        
        if (time > 0) {
            time--;
            document.querySelector("#timer").innerHTML = time;

        }
        else {
            clearInterval(intvl);
            printScore();
        }
    }, 1000);
}

function numGen() { 
    newNum = Math.floor(Math.random () * 10);
    document.querySelector("#num").textContent= newNum;
}

function incScore (){
    point+=10;
    document.querySelector("#pts").textContent = point;
}

function ifMatched(){
    document.querySelector("#game").addEventListener("click", function(bubNum){
        if(bubNum.target.textContent == newNum){
            incScore();
            randomBubbles();
            numGen();
        }
    })

    
}


function printScore(){
        document.querySelector("#over").textContent = point; // Update the score
        document.querySelector("#endpanel").style.display = "block"; // Show the panel            
}



randomBubbles();
timer();
numGen();
ifMatched();




document.querySelector("#restart").addEventListener("click", function(){
    time = 30;  // Reset time
    point = 0;  // Reset score
    document.querySelector("#pts").textContent = point; // Reset displayed score
    document.querySelector("#timer").textContent = time; // Reset displayed timer
    document.querySelector("#endpanel").style.display = "none"; // Hide end panel
    randomBubbles();  // Generate new bubbles
    numGen();  // Generate a new number
    timer();  // Start the timer again
    document.querySelector("#game").removeEventListener("click", ifMatched);
    ifMatched();  
})




