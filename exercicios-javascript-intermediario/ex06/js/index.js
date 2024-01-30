const mostrarTexto = document.querySelectorAll(".conteudo__link");
const texto = document.querySelectorAll(".conteudo__resposta");

/* mostrarTexto.addEventListener('click', function() {
    texto.classList.add('mostrar');
}) */

mostrarTexto.forEach(function(item) {
    item.addEventListener("click", function() {
        item.classList.add("mostrar");
    })
})
