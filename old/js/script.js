// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Bottoni

var invia = document.getElementById('invia');
var annulla = document.getElementById('annulla');

// Creare evento click

invia.addEventListener("click",
  function (){
    // L'utente indica se sceglie di puntare sul pari o sul dispari
    var puntata = document.getElementById('puntata').value;
    console.log("L'utente ha puntato su ", puntata);

    // L'utente sceglie un numero
    var scommessaNumero = parseInt(document.getElementById('scommessaNumero').value);
    console.log("L'utente ha puntato sul numero ", scommessaNumero);

    // Generare un numero random (1-5): la puntata del computer
    var scommessaPc = getNumRand(6, 1);
    console.log("Il numero su cui ha puntato il pc è ", scommessaPc);

    // Sommare i due numeri
    var risultato = somma(scommessaNumero, scommessaPc);
    console.log("La somma dei due numeri è ", risultato);
    document.getElementById('somma').innerHTML = scommessaNumero + " + " + scommessaPc;

    // Stabilire se la somma dei due numeri è pari o dispari (usando una funzione)
    var esito = pariDispari(risultato);
    console.log("La somma è ", esito);

    // Dichiarare chi ha vinto
    if (puntata === esito) {
      console.log("Hai vinto")
      document.getElementById('vittoria').innerHTML = "Complimenti hai vinto! ";
    }
    else {
      console.log("Hai perso")
      document.getElementById('vittoria').innerHTML = "Peccato hai perso! ";
    }
});

// FUNZIONI

 // Creare una funzione per generare numeri random
  function getNumRand(max, min) {
    return Math.floor(Math.random()* max + min);
  }

  // Creare una funzione per sommare i due numeri
  function somma(numUno, numDue) {
      var somma = parseInt(numUno + numDue);
        return somma;
  }

// Creare una funzione per determinare se la somma è pari o dispari
function pariDispari(somma) {
  if (somma % 2 === 0) {
    return "Pari";
  }
  else {
    return "Dispari";
  }
}
