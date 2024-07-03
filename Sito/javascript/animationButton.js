// non c'è una funzione, solo un'istruzione
document.addEventListener("DOMContentLoaded", function() { // osserva cosa accade nel documento
    const inviaButton = document.querySelector('input[type="Invia"]'); // trova l'input Invia
    
    inviaButton.addEventListener("click", function() { // quando il bottone viene cliccato
        inviaButton.classList.remove("invia-animazione"); // rimuovi eventuali animazioni precedenti
        
        void inviaButton.offsetWidth;// riporta il bottone nella posizione originale

        inviaButton.classList.add("invia-animazione");// aggiungi l'animazione
    });
});
