/* inizializzo variabili */
let userInput = 'palindromo'

/**
 * controlla se la parola inserita dall'user è palindroma
 * @param {array} userInput 
 * @return {array}
 */
function checkWord(userInput) {
  userInput = prompt('inserisci una parola, prova con una parola palindroma!')
  let wordCharacter = []
  let inverseWordCharacter = []
  /* inserisco le lettere di userInput in due array, una volta in ordine regolare ed una volta in ordine inverso */
  for (let letter of userInput) {
    wordCharacter.push(letter)
    inverseWordCharacter.unshift(letter)
  }
  /* controllo che ogni carattere sia identico tra i due array */
  for (index = 0; index < wordCharacter.length; index++) {
    if (wordCharacter[index] != inverseWordCharacter[index]) {
      console.log(userInput + " non è una parola palindroma");
      break; //attraverso break evito che for loop continui a ripetere in console che il prompt non rispetta la condizione
    }
    else {
      console.log(userInput + " è una parola palindroma")
    }
  }
  /* ritorno il valore che voglio ottenere dall'esecuzione di questa funzione */
  return wordCharacter, inverseWordCharacter
}

/* invoco la funzione */
let finalResult = checkWord()



