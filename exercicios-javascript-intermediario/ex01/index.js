const btnTrocaCor = document.getElementById("btn-troca-cor");
const blocoAzul = document.querySelector(".azul");

btnTrocaCor.addEventListener("click", trocarCor);

function trocarCor() {
  blocoAzul.classList.remove("azul");
  blocoAzul.classList.add("amarelo");
}