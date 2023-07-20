let attempts
let val
let result_div
let attempts_cont
let container = document.querySelector('main')
const button = document.getElementById('guess_button')
const retry = document.getElementById('retry_button')

function main() {
  result_div = document.getElementById("result")
  attempts_cont = document.getElementById("attempts")
  attempts = 0
  val = Math.ceil(Math.random()* 100)
  console.log(val)
}

function utilityFunc(result,attempts,color='white',isButtonDisabled=false)
{
    let info = document.getElementById("info")
    info.textContent = result
    attempts_cont.textContent = attempts
    container.style.backgroundColor = color
    button.disabled = isButtonDisabled
    return
}

function myGame() {
  attempts++
  let input = document.querySelector("input")
  let inputValue = Number(input?.value)
  if(attempts>10){
    utilityFunc("YOU LOSES😭",`You took More than 10 attempts`,"rgb(255, 95, 83)",true)
  }
  if (inputValue > val) {
    utilityFunc(`Your Guess ${inputValue} is too High`,`Attempts: ${attempts}`)
  }
  if (inputValue < val) {
    utilityFunc(`Your Guess ${inputValue} is too low`,`Attempts: ${attempts}`)
  }
  if (inputValue == val) {
    utilityFunc("YOU GOT IT",`You took ${attempts} attempts`,"#67ff67",true)
  }
}
