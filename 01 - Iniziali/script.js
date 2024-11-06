"use strict"
/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
/*

// Dichiara la funzione qui.
 function nameFilter(array) {
    const filteredName = [];
    for (let i = 0; i < array.length; i++) {
        filteredName.push(array[i][0]);
    }
    return filteredName;
}
// Invoca la funzione qui e stampa il risultato in console
let call = nameFilter(names);
console.log(call);
*/

// Dichiara la funzione qui.
const nameFilter = (array) => {
    const filteredName = [];
    for (let i = 0; i < array.length; i++) {
        filteredName.push(array[i][0]);
    }
    return filteredName;
}

// Invoca la funzione qui e stampa il risultato in console
let call = nameFilter(names);
console.log(call);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]