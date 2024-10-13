const random= Math.round(Math.random()*10+1)
const form=document.querySelector('form')
const result=document.querySelector('.result')
const prev=document.querySelector('#list')
const remain=document.querySelector('#rem')

let arr=[]
let count=0

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inval=parseInt(document.querySelector('.in').value)
    validateguess(inval);
})
function validateguess(num){
    if(isNaN(num)){
        result.innerHTML="Enter valid input"
    }
    else if(num>0 && num<=10){
        arr.push(num)
        if(arr.length==3){
            arr=[]
            prev.innerHTML=''
            rem.innerHTML=3
            result.innerHTML='Game Over- Start New Game'
        }
        else{
        if(random==num){
            result.innerHTML="Guesses correct - You won Start New Game"
            arr=[]
            prev.innerHTML=''
            rem.innerHTML=3
        }
        else{
            prev.innerHTML+=`${num} `
            rem.innerHTML=3-arr.length
            result.innerHTML="Try again"
        }
    }
    }
    else{
        result.innerHTML="Enter numbers between 1 and 10"
    }
    
}
