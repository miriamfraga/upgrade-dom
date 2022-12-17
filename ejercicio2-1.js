'use strict';
var newDiv= document.createElement('div');
console.log(newDiv);

var newP = document.createElement('p');
newDiv.append(newP);

var newDivv = document.createElement('div');
for(let i=0; i<6; i++) {
let newParr = document.createElement('p');
newDivv.append(newParr);

    
}
console.log(newDivv);
var newPp = document.createElement('p');
newPp.innerText = ('soy dinámico!');
document.body.append(newPp);
console.log(newPp);

let newH2 = document.getElementsByClassName('fn-insert-here');
console.log(newH2);
let textIn = (newH2[0].innerText = 'Wubba Lubba dub dub');

console.log(textIn);

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const list =document.createElement('ul');
for (let i=0; i<apps.length; i++) {
const lies = document.createElement('li');
lies.innerText = apps[i];
list.append(lies);
document.body.append(list);

} console.log(list);

const borrar = document.querySelectorAll('.fn-remove-me');
for (let i=0; i<borrar.length; i++) {
     borrar[i].remove();
} console.log(borrar);

var newPpp = document.createElement('p');
newPpp.innerText = 'Voy en medio';
let divs = document.querySelectorAll('div.fn-insert-here');
console.log(divs);
document.body.insertBefore(newPpp,divs[1]);
console.log(newPpp);

 for (let i=0; i<divs.length; i++) {
let parrafo = document.createElement('p');
parrafo.innerText = 'Voy dentro!';

    divs[i].appendChild(parrafo);
    console.log(parrafo);

 } 





