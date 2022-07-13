const inputEl = document.getElementById("input")
const lengthEl = document.getElementById("length-results")
const volumeEl = document.getElementById("volume-results")
const massEl = document.getElementById("mass-results")
const button = document.getElementById("convert-btn")
console.log(inputEl.value)

button.addEventListener("click", function() {
    let feetCalc = (inputEl.value * 3.281).toFixed(2)
    let meterCalc = (inputEl.value / 3.281).toFixed(2)
    lengthEl.textContent = `${inputEl.value} meters = ${feetCalc} feet | ${inputEl.value} feet = ${meterCalc} meters`
    let gallonCalc = (inputEl.value * 0.264).toFixed(2)
    let literCalc = (inputEl.value / 0.264).toFixed(2)
    volumeEl.textContent = `${inputEl.value} liters = ${gallonCalc} gallons | ${inputEl.value} gallons = ${literCalc} liters`
    let poundCalc = (inputEl.value * 2.204).toFixed(2)
    let kilogramCalc = (inputEl.value / 2.204).toFixed(2)
    massEl.textContent = `${inputEl.value} kilogram = ${poundCalc} pounds | ${inputEl.value} pounds = ${kilogramCalc} kilograms`
})



/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/