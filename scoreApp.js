let homePoints = document.getElementById("home-points")
let awayPoints = document.getElementById("away-points")
let homeSum = 0
let awaySum = 0
function plusOne() {
    homeSum += 1;
    homePoints.innerText = homeSum
}

function plusTwo() {
    homeSum += 2
    homePoints.innerText = homeSum
}

function plusThree() {
    homeSum += 3
    homePoints.innerText = homeSum
}

function plusOneAway() {
    awaySum += 1;
    awayPoints.innerText = awaySum
}

function plusTwoAway() {
    awaySum += 2
    awayPoints.innerText = awaySum
}

function plusThreeAway() {
    awaySum += 3
    awayPoints.innerText = awaySum
}

function resetSum() {
    awaySum = 0
    awayPoints.innerText = awaySum
    homeSum = 0
    homePoints.innerText = awaySum
}