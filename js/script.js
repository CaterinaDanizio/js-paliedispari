// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Creare un prompt per far inserire la parola all'utente

var wordUser = prompt("Inserisci una parola");
console.log("La parola inserita è ", wordUser);

// Condizione per verificare che la parola sia palindroma

var wordReverse = reverseString(wordUser);
if (wordReverse === wordUser) {
  console.log("La parola è palindroma");
  document.getElementById('esito').innerHTML = "La parola è palindroma ";
}
else {
  console.log("La parola non è palindroma");
  document.getElementById('esito').innerHTML = "La parola non è palindroma ";
};

// Funzione per invertire la parola

function reverseString(word) {
  return word.split('').reverse().join('');
};
