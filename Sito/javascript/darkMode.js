//Cambio colore bianco-nero
function toggleDark() {
  var element = document.body; //variabile non specificata
  element.classList.toggle("dark-mode"); //attiva la dark-mode per il body

  var elements = document.getElementsByClassName("custom-quote"); //fa una lista degli elementi con nome custom-quotes
  for (var i = 0; i < elements.length; i=i+1) { // ciclo definito. 
      elements[i].classList.toggle("dark-mode-quotes"); // attiva la dark-mode per tutti gli elementi della lista
  }

  var elementi = document.getElementsByClassName("accordion-content");
  for (var i = 0; i < elementi.length; i=i+1){
    elementi[i].classList.toggle("accordion-content-dark");
  }

  var elementi2 = document.getElementsByClassName("accordion");
  for (var i = 0; i < elementi2.length; i=i+1){
    elementi2[i].classList.toggle("accordion-dark");
  }

  var contenitoreContatti = document.getElementsByClassName("containerC");
  for (var i = 0; i < contenitoreContatti.length; i=i+1){
    contenitoreContatti[i].classList.toggle("containerC-dark")
  }
}