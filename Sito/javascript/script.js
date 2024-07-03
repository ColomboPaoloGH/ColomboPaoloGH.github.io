let index = 0; // Indice dell'immagine corrente

// Funzione per scorrere le immagini a destra
function moveRight() {
    const images = document.querySelector('.images'); // Seleziona il contenitore delle immagini
    const imgCount = images.children.length; // Conta il numero di immagini
    index = (index + 1) % imgCount; // Incrementa l'indice e lo resetta se supera il numero di immagini
    images.style.transform = `translateX(-${index * 100}%)`; // Trasforma la posizione delle immagini
}

// Funzione per scorrere le immagini a sinistra
function moveLeft() {
    const images = document.querySelector('.images'); // Seleziona il contenitore delle immagini
    const imgCount = images.children.length; // Conta il numero di immagini
    index = (index - 1 + imgCount) % imgCount; // Decrementa l'indice e lo resetta se è minore di zero
    images.style.transform = `translateX(-${index * 100}%)`; // Trasforma la posizione delle immagini
}

/* Quando scorri in giù, la barra si nasconde. Quando scorri verso l'alto ricompare */

