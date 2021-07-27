"use strict"


const display = document.querySelector('.text-change');
const allBtn = document.querySelectorAll('.btn');
const main = document.getElementById('main');
const body = document.querySelector("body");

let count = 0 ;
allBtn.forEach(el => {
    
    el.addEventListener('click',()=>{
        
        if (el.classList.contains('left-btn')) {
            display.textContent = --count;
        } else if (el.classList.contains('right-btn')){
            display.textContent = ++count;
        } else {
            count = 0;
            display.textContent = count ;
        } 
        
        if (count <= -1){
            main.style.boxShadow = "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(209, 21, 21, 0.849) 0px -5px 0px inset";
        } else if (count > 0){
            main.style.boxShadow = "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(21, 255, 21, 0.658) 0px -5px 0px inset";
        } else{
            main.style.boxShadow = "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(255, 255, 255, 0.658) 0px -5px 0px inset";
        }  

    })
    
})

