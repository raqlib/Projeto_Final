// Script Verificar Autenticação de Utilizador ao Carregar a Página

document.addEventListener("DOMContentLoaded", () => {
  const utilizador = sessionStorage.getItem("utilizador");
  if (!utilizador) {
    window.location.href = "login.html";
  }
});
