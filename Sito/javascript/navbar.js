// barra di navigazione
let prevScrollpos = window.scrollY; // capisce il valore di Y della pagina
const navbar = document.getElementById("navbar"); // trova la navbar

window.onscroll = function() { // quando scrolli
    const currentScrollPos = window.scrollY; // Y ha una nuova posizione
    if (prevScrollpos > currentScrollPos) { //se posizione vecchia > della nuova (se scorro verso l'alto)
        navbar.style.top = "0"; // allora navbar rimane
    } else { // viceversa
        navbar.style.top = "-50px"; // allora navbar scompare
    }
    prevScrollpos = currentScrollPos;
}
