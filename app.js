let userAmount = document.querySelector("#user-amount")
let userPercentage = document.querySelector("#user-percentage")
let result = document.querySelector("#result")

function calculate() {
    let calculateUserAmount  = userAmount.value / 100 * userPercentage.value 
    let calculateUserAmount2  = userAmount.value +++ calculateUserAmount
    console.log(calculateUserAmount2);
    result.innerHTML = `Total: ${calculateUserAmount2}.00`
    userAmount.value = ""
    userPercentage.value = ""
}