let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let hScore = 0
let gScore = 0



function plus1home(){
    hScore +=1
    homeScore.textContent = hScore}
function plus2home(){
    hScore += 2
    homeScore.textContent = hScore
}
function plus3home(){
    hScore += 3
    homeScore.textContent = hScore
}
function plus1guest(){
    gScore +=1
    guestScore.textContent = gScore
}
function plus2guest(){
    gScore +=2
    guestScore.textContent = gScore
}
function plus3guest(){
    gScore +=3
    guestScore.textContent = gScore
}