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
    if(arr.length==3){
        arr=[]
        prev.innerHTML=''
        result.innerHTML='Game Over'
    }
    else if(num>0 && num<=10){
        arr.push(num)
        count=3-arr.length
        prev.innerHTML+=`${num} `
        rem.innerHTML=3-arr.length
        if(random==num){
            result.innerHTML="Guesses correct - You won"

        }
        else{
            result.innerHTML="Try again"
        }
    }
    else{
        result.innerHTML="Enter numbers between 1 and 10"
    }
    
}