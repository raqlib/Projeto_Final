// Scripts JavaScript Voltar ao Topo

// Script para que o botão "voltar ao topo" só apareça quando não estivermos no topo da página
const voltarAoTopo = document.getElementById("voltarAoTopo");

function verificarPosicaoRolagem() {
  if (window.scrollY > 100) {
    voltarAoTopo.style.display = "block";
  } else {
    voltarAoTopo.style.display = "none";
  }
}

window.addEventListener("scroll", verificarPosicaoRolagem);

verificarPosicaoRolagem();
