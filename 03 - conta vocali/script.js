/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


/* 
// Dichiara la funzione qui.
function vowelFilter(giveMeWord) {
    const vowels = ["a", "e", "i", "o", "u"]
    let vowelsNumber = 0;
    for (let i = 0; i < giveMeWord.length; i++) {
        for (let e = 0; e < vowels.length; e++) {
            if (giveMeWord[i] == vowels[e]) {
                vowelsNumber = vowelsNumber + 1;
            }
        }
    }
    return vowelsNumber
}

// Invoca la funzione qui e stampa il risultato in console

let call = vowelFilter(word);
console.log(call)

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
*/


// Dichiara la funzione qui.
const vowelFilter = (giveMeWord) => {
    const vowels = ["a", "e", "i", "o", "u"]
    let vowelsNumber = 0;
    for (let i = 0; i < giveMeWord.length; i++) {
        for (let e = 0; e < vowels.length; e++) {
            if (giveMeWord[i] == vowels[e]) {
                vowelsNumber = vowelsNumber + 1;
            }
        }
    }
    return vowelsNumber
}

// Invoca la funzione qui e stampa il risultato in console
console.log(vowelFilter(word))