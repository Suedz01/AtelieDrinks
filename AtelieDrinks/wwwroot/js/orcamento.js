document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o bot�o para abrir o modal
    var btn = document.getElementById("myBtn");

    // Seleciona o modal
    var modal = document.getElementById("background-black");

    // Seleciona o bot�o para fechar o modal
    var span = document.getElementsByClassName("fechar-modal")[0];

    // Fun��o para abrir o modal
    function abrirModal() {
        modal.style.display = "block";
    }

    // Fun��o para fechar o modal
    function fecharModal() {
        modal.style.display = "none";
    }

    // Abre o modal quando o bot�o for clicado
    btn.addEventListener("click", abrirModal);

    // Fecha o modal quando o bot�o de fechar for clicado
    span.addEventListener("click", fecharModal);

    // Fecha o modal quando o usu�rio clicar fora do modal
    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            fecharModal();
        }
    });
});
