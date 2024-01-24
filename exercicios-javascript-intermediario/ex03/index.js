const bloco = document.querySelector('.bloco');

/* bloco.addEventListener("click", trocarCor);

function trocarCor() {
    if (bloco.classList.contains('azul')) {
        bloco.classList.remove("azul");
    } else {
        bloco.classList.add("azul");
    }
} */

bloco.addEventListener('click', () => {
    const classeAzulExiste = bloco.classList.contains('azul');
    if (classeAzulExiste) {
        bloco.classList.remove('azul');
    } else {
        bloco.classList.add('azul');
    }
})
