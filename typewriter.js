"use strict";
const typeSoundOne = document.getElementById('typekey1');
const typeSoundTwo = document.getElementById('typekey2');
const typeSoundSpace = document.getElementById('typespace');
;

let fullText = document.querySelector('#typewriter').textContent;

document.querySelector('#typewriter').textContent ="";

let counter = 0;

console.log('fulltext: ', fullText)

const btn = document.getElementById('btn').addEventListener('click', init);

function init(){

setInterval(() => {
    if (counter < fullText.length){
        document.querySelector('#typewriter').textContent = fullText.substring(0, counter + 1);
        if (fullText[counter] === " "){
            playSoundSpace();
        }
        else{
            playSound();
        }
    }
    else{
        counter = 0; 
    }
    counter++;
}, 400);
}


function playSoundSpace() {
    typeSoundSpace.play();
}

function playSound() {
    let x = randomIntBetween(1,2);
    if( x == 1 ){
        typeSoundOne.play();
    } else {
        typeSoundTwo.play();
    }
}


function randomIntBetween(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

