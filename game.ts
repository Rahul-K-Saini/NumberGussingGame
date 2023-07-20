let attempts:number;
let val:number;
let result_div;
let attempts_cont;
let body:any = document.querySelector('body');
function main(){
    result_div= document.getElementById('result')
    attempts_cont = document.getElementById('attempts')
    attempts = 0;
    val = Math.ceil(Math.random()*100)
}
function myGame(){
    console.log(val)
    attempts++;
    let input;
    let inputValue:number;
    let info:any = document.getElementById('info')
    input = document.querySelector('input');
    inputValue = (Number)(input?.value);
    if(inputValue>val){
        info.textContent = `Your Guess ${inputValue} is too High`
        return
    }
    if(inputValue<val){
        info.textContent = `Your Guess ${inputValue} is too low`
        return
    }
    if(inputValue==val){
        info.textContent = 'YOU GOT IT'
        attempts_cont.textContent = `You took ${attempts} attempts`
        body.style.backgroundColor = 'green'
        return
        
    }
}

export {}