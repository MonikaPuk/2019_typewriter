"use strict";

let fullText = document.querySelector('#typewriter').textContent;

document.querySelector('#typewriter').textContent ="";
let counter=0;

console.log('fulltext: ', fullText)



setInterval(() => {
    if (counter < fullText.length){
        document.querySelector('#typewriter').textContent = fullText.substring(0, counter + 1);
    }
    else{
        counter = 0; 
    }
    counter++;
}, 300);

