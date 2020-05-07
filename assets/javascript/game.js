let resetbutton = document.querySelector ("#reset-button")
let numresets = document.querySelector ("#num-resets")
let teamoneNumshots = document.querySelector ("#teamone-numshots")
let teamoneNumgoals = document.querySelector ("#teamone-numgoals")
let teamtwoNumshots = document.querySelector ("#teamtwo-numshots")
let teamtwoNumgoals = document.querySelector ("#teamtwo-numgoals")
let teamonebutton = document.querySelector ("#teamone-shoot-button")
let teamtwobutton = document.querySelector ("#teamtwo-shoot-button")
let team1Numshots = 0
let team1Numgoals = 0
let team2Numshots = 0
let team2Numgoals = 0
let resetsnum = 0

resetbutton.addEventListener("click", function (){
numresets.innerHTML = resetsnum += 1
teamoneNumshots.innerHTML = team1Numshots = 0
teamoneNumgoals.innerHTML = team1Numgoals = 0
teamtwoNumshots.innerHTML = team2Numshots = 0
teamtwoNumgoals.innerHTML = team2Numgoals = 0
})

teamonebutton.addEventListener("click", function (){
let random = Math.random()
teamoneNumshots.innerHTML = team1Numshots +=1
if (random <0.5){
teamoneNumgoals.innerHTML = team1Numgoals +=1
}
})

teamtwobutton.addEventListener("click", function (){
let random = Math.random()
teamtwoNumshots.innerHTML = team2Numshots +=1
if (random <0.5){
teamtwoNumgoals.innerHTML = team2Numgoals +=1
}
})