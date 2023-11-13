/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.*/

// PASSO 1: CHIEDO ALL'UTENTE IL NUMERO DI CHILOMETRI E L'ETA//
let numberOfkilometres=prompt("Numero dei chilometri");
let ageUser=prompt("Quanti anni hai?");
//PASSO 1A:VALIDO I MIEI DATI//
if (isNaN(numberOfkilometres) || isNaN(ageUser)) {
    alert("Mi dispiace non hai inserito entrambi dei numeri!")
} ;
  // PASSO 1b: converto i testi dell'età in numeri//
numberOfkilometres = parseInt(numberOfkilometres);
 ageUser= parseInt(ageUser);




//PASSO 3: CALCOLO PREZZO BASE DEL BIGLIETTO//
let priceBase= numberOfkilometres*0.21;
//









