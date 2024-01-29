const botao = document.querySelectorAll('.botao');

botao.forEach(input => {
    input.addEventListener('change', () => {
        if (input.value !== "") {
            input.classList.add('borda-verde');
        } else {
            input.classList.remove('borda-verde');
        }
    })
})
