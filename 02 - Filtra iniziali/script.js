/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
let choosenLetter = "a"

// Dichiara la funzione qui.
/*
function nameFilter(array, letter) {
    const filteredName = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i][0] == letter) filteredName.push(array[i]);
    }
    return filteredName;
}

// Invoca la funzione qui e stampa il risultato in console
let choosenLetter = "a"
let call = nameFilter(names, choosenLetter.toUpperCase());
console.log(call);
*/
//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]









// Dichiara la funzione qui.

// Invoca la funzione qui e stampa il risultato in console



// Dichiara la funzione qui.

const nameFilter = (array, letter) => {
    const filteredName = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i][0] == letter) filteredName.push(array[i]);
    }
    return filteredName;
}

// Invoca la funzione qui e stampa il risultato in console

// Invoca la funzione qui e stampa il risultato in console
console.log(nameFilter(names, choosenLetter.toUpperCase()));