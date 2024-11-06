/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

/* 
// Dichiara la funzione qui.
function sayingHiTo(giveMeName) {
    let hiTo = ""
    let time = ""
    let date = new Date();
    let hour = date.getHours();
    if (hour < 13) {
        time = "Buongiorno"
    } else if (hour >= 13 && hour <= 17) {
        time = "Buon pomeriggio"
    } else {
        time = "Buona sera"
    }
    hiTo = `${time} ${giveMeName}`;
    return hiTo;


}// Invoca la funzione qui e stampa il risultato in console

let call = sayingHiTo(name);
console.log(call);
*/

// Dichiara la funzione qui.
const sayingHiTo = (giveMeName) => {
    let hiTo = ""
    let time = ""
    let date = new Date();
    let hour = date.getHours();
    if (hour < 13) {
        time = "Buongiorno"
    } else if (hour >= 13 && hour <= 17) {
        time = "Buon pomeriggio"
    } else {
        time = "Buona sera"
    }
    hiTo = `${time} ${giveMeName}`;
    return hiTo;


}// Invoca la funzione qui e stampa il risultato in console

console.log(sayingHiTo(name));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.