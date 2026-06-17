document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    if (senha !== confirmarSenha) {
        event.preventDefault();
        return;
    }

    event.preventDefault();
    window.location.href = "index.html";
});

function voltar() {
    window.location.href = "index.html";
}