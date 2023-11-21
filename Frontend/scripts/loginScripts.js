// Login Scripts

const APIbaseURL = "http://localhost:3000";

// Função para buscar o utilizador
async function getUtilizador(data) {
  try {
    const response = await fetch(`${APIbaseURL}/api/utilizador`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Erro ao verificar utilizador:", error);
    return null;
  }
}

// Função para criar um novo utilizador
async function createUtilizador(data) {
  try {
    const response = await fetch(`${APIbaseURL}/api/utilizador/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Erro ao criar utilizador:", error);
    throw error;
  }
}

// Função para fazer login
async function login(event) {
  event.preventDefault();
  const email = event.target.emailLogin.value;
  const password = event.target.passwordLogin.value;
  const data = { email: email, password: password };
  console.log(data);
  try {
    const utilizador = await getUtilizador(data);
    if (utilizador.length > 0) {
      sessionStorage.setItem("utilizador", JSON.stringify(utilizador[0]));
      location.href = "index.html";
    } else {
      alert(
        "Utilizador não se encontra registado, ou dados de acesso incorretos!"
      );
    }
  } catch (error) {
    console.error(error);
  }
  finally {
    event.target.reset();
  }
}

// Função para registar novo utilizador
async function registarNovoUtilizador(event) {
  event.preventDefault();
  const nome = event.target.nomeRegisto.value;
  const email = event.target.emailRegisto.value;
  const password = event.target.passwordRegisto.value;
  const data = { nome: nome, email: email, password: password };
  try {
    const response = await createUtilizador(data);
    if (response.message) {
      alert(response.message);
    } else {
      alert("Erro no registo do utilizador, tente novamente!");
    }
  } catch (error) {
    console.error(error);
  } finally {
    event.target.reset();
  }
}
