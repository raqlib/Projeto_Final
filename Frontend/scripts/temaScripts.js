// Scripts JavaScript Tema light/dark

// Funções para mudar o tema
const setDarkTheme = () => {
  const buttonElement = document.getElementById("botaoMudarTema");
  buttonElement.innerHTML = '<i class="bi bi-brightness-high"></i>';
  document.documentElement.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark" || "");
};

const setLightTheme = () => {
  const buttonElement = document.getElementById("botaoMudarTema");
  buttonElement.innerHTML = '<i class="bi bi-brightness-high"></i>';
  document.documentElement.setAttribute("theme", "light");
  localStorage.setItem("theme", "light" || "");
};

// Aplicar o tema guardado em localStorage ou ajustar o tema ao tema do dispositivo do usuario
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.documentElement.setAttribute("theme", "dark");
}

if (localStorage.getItem("theme")) {
  localStorage.getItem("theme") === "dark" ? setDarkTheme() : setLightTheme();
} else {
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? setDarkTheme()
    : setLightTheme();
}

// Função para o botão de mudar o tema
const toggleTheme = () => {
  if (document.documentElement.getAttribute("theme") === "dark") {
    setLightTheme();
  } else {
    setDarkTheme();
  }
};
