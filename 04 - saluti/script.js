/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';
/*
// Dichiara la funzione qui.
function sayHi(chooseAName) {
    let hiTo = `Ciao ${chooseAName}!`
    return hiTo;
}
// Invoca la funzione qui e stampa il risultato in console

let call = sayHi(name);
console.log(call);
*/


// Dichiara la funzione qui.
const sayHi = (chooseAName) => {
    let hiTo = `Ciao ${chooseAName}!`
    return hiTo;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(sayHi(name));


//Risultato atteso se si passa 'Mario': // ciao Mario