// Javascript
var form = document.querySelector('.adicionar-tarea');
var boton = document.querySelector('#boton-adicionar');
boton.addEventListener("click", function(event){
    event.preventDefault();
    console.log(form.tarea.value);
    //Código para adicionar en la lista de Actividades
});