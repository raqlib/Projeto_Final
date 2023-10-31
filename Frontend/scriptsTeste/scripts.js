const APIbaseURL = "http://localhost:3000";

// Função para criar um novo artigo
async function createArtigo(data) {
  try {
    const response = await fetch(`${APIbaseURL}/api/artigo/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Erro ao criar artigo:", error);
    throw error;
  }
}

// Função para criar uma nova categoria
async function createCategoria(data) {
  try {
    const response = await fetch(`${APIbaseURL}/api/categoria/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Erro ao criar categoria:", error);
    throw error;
  }
}

// Função para buscar todos os artigos
async function getArtigos() {
  try {
    const response = await fetch(`${APIbaseURL}/api/artigos`);
    const artigos = await response.json();
    return artigos;
  } catch (error) {
    console.error("Erro ao buscar artigos:", error);
    throw error;
  }
}

async function getArtigo(id) {
  try {
    const response = await fetch(`${APIbaseURL}/api/artigo/${id}`);
    const artigo = await response.json();
    return artigo[0];
  } catch (error) {
    console.error("Erro ao buscar artigos:", error);
    throw error;
  }
}

// Função para buscar todas as categorias
async function getCategorias() {
  try {
    const response = await fetch(`${APIbaseURL}/api/categorias`);
    const categorias = await response.json();
    return categorias;
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);
    throw error;
  }
}

// Função para atualizar um artigo
async function updateArtigo(id, data) {
  try {
    const response = await fetch(`${APIbaseURL}/api/Artigo/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Erro ao atualizar artigo:", error);
    throw error;
  }
}

// Função para atualizar uma categoria
async function updateCategoria(id, data) {
  try {
    const response = await fetch(`${APIbaseURL}/api/categoria/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Erro ao atualizar categoria:", error);
    throw error;
  }
}

// Função para excluir um artigo
async function deleteArtigo(id) {
  try {
    const response = await fetch(`${APIbaseURL}/api/artigo/delete/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Erro ao apagar artigo:", error);
    throw error;
  }
}

// Função para excluir uma categoria
async function deleteCategoria(id) {
  try {
    const response = await fetch(`${APIbaseURL}/api/categoria/delete/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Erro ao excluir categoria:", error);
    throw error;
  }
}

//Funções de Manipulação do DOM

function criarTabelaArtigos(listaArtigos) {
  const tabelaArtigos = document.createElement("table");
  tabelaArtigos.id = "tabelaArtigos";
  tabelaArtigos.innerHTML = `
    <thead id="cabecalhoTabelaArtigos">
      <tr>
        <th>Nome</th>
        <th>Categoria</th>
        <th>Quantidade</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody id="corpoTabelaArtigos"></tbody>
  `;

  const corpoTabelaArtigos = tabelaArtigos.querySelector("tbody");

  listaArtigos.forEach((artigo) => {
    const linha = document.createElement("tr");
    linha.setAttribute("id_artigo", artigo.id_artigo);
    linha.innerHTML = `
      <td>${artigo.nome}</td>
      <td>${artigo.tipo ? artigo.tipo : ""}</td>
      <td>${artigo.quantidade}</td>
      <td>
        <button onclick="atualizarArtigo('${artigo.id_artigo}','${
      artigo.nome
    }','${artigo.quantidade}','${artigo.id_categoria}')">Atualizar</button>
        <button onclick="apagarArtigo('${artigo.id_artigo}')">Apagar</button>
      </td>
    `;
    corpoTabelaArtigos.appendChild(linha);
  });

  return tabelaArtigos;
}

async function adicionarTabelaArtigosDOM() {
  const listaArtigos = await getArtigos();

  const selectCategorias = document.getElementById("selectCategorias");
  let id_categoriaSelecionada = selectCategorias.value;

  let listaArtigosFiltrados = [];

  if (id_categoriaSelecionada == -1) {
    listaArtigosFiltrados = listaArtigos;
  } else {
    if (id_categoriaSelecionada == 0) {
      id_categoriaSelecionada = null;
    }
    listaArtigosFiltrados = listaArtigos.filter(
      (artigo) => artigo.id_categoria == id_categoriaSelecionada
    );
  }

  const pesquisaNome = document.getElementById("pesquisaNome");
  if (pesquisaNome.value) {
    listaArtigosFiltrados = listaArtigosFiltrados.filter((artigo) =>
      artigo.nome.toLowerCase().includes(pesquisaNome.value.toLowerCase())
    );
  }

  const tabelaArtigosContainer = document.getElementById(
    "tabelaArtigosContainer"
  );
  tabelaArtigosContainer.innerHTML = "";

  if (listaArtigosFiltrados.length == 0) {
    tabelaArtigosContainer.innerHTML = `
    <p>Não existem artigos no inventário</p>
    `;
  } else {
    tabelaArtigosContainer.appendChild(
      criarTabelaArtigos(listaArtigosFiltrados)
    );
  }
}

function criarTabelaCategorias(listaCategorias) {
  const tabelaCategorias = document.createElement("table");
  tabelaCategorias.id = "tabelaCategorias";
  tabelaCategorias.innerHTML = `
    <thead id="cabecalhoTabelaCategorias">
      <tr>
        <th>Tipo</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody id="corpoTabelaCategorias"></tbody>
  `;

  const corpoTabelaCategorias = tabelaCategorias.querySelector("tbody");

  listaCategorias.forEach((categoria) => {
    const linha = document.createElement("tr");
    linha.setAttribute("id_categoria", categoria.id_categoria);
    linha.innerHTML = `
      <td>${categoria.tipo}</td>
      <td>
        <button onclick="atualizarCategoria('${categoria.id_categoria}','${categoria.tipo}')">Atualizar</button>
        <button onclick="apagarCategoria('${categoria.id_categoria}')">Apagar</button>
      </td>
    `;
    corpoTabelaCategorias.appendChild(linha);
  });

  return tabelaCategorias;
}

async function adicionarTabelaCategoriasDOM() {
  const listaCategorias = await getCategorias();
  const tabelaCategoriasContainer = document.getElementById(
    "tabelaCategoriasContainer"
  );
  tabelaCategoriasContainer.innerHTML = "";

  if (listaCategorias.length == 0) {
    tabelaCategoriasContainer.innerHTML = `
    <p>Não existem categorias no inventário</p>
    `;
  } else {
    tabelaCategoriasContainer.appendChild(
      criarTabelaCategorias(listaCategorias)
    );
  }
}

async function atualizarArtigo(id_artigo, nome, quantidade, id_categoria) {
  const linhaArtigo = document.querySelector(`tr[id_artigo="${id_artigo}"]`);
  const dialog = document.getElementById("dialog");
  dialog.innerHTML = `
      <h2>Atualizar Artigo</h2>
      <form>
        <input type="text" name="nome" value="${nome}">
        <select name="categoria">
        </select>
        <input type="number" name="quantidade" value="${quantidade}">
        <button type="submit">Submeter Atualização</button>
      </form>
      <button onclick="dialog.close()">Cancelar</button>
`;

  const listaCategorias = await getCategorias();
  const optionSemCategoria = document.createElement("option");
  optionSemCategoria.value = 0;
  optionSemCategoria.textContent = "Sem Categoria";
  dialog.querySelector("select").appendChild(optionSemCategoria);
  listaCategorias.forEach((categoria) => {
    const option = document.createElement("option");
    option.value = categoria.id_categoria;
    option.textContent = categoria.tipo;
    if (categoria.id_categoria == id_categoria) {
      option.selected = true;
    }
    dialog.querySelector("select").appendChild(option);
  });

  dialog.showModal();

  dialog.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(dialog.querySelector("form"));
    const nome = formData.get("nome");
    const id_categoria =
      formData.get("categoria") === 0 ? null : formData.get("categoria");
    const quantidade = formData.get("quantidade");

    const data = {
      nome: nome,
      id_categoria: id_categoria,
      quantidade: quantidade,
    };
    console.log(data);
    const response = await updateArtigo(id_artigo, data);
    if (response.message) {
      alert(response.message);
      dialog.close();

      const artigoAtualizado = await getArtigo(id_artigo);

      linhaArtigo.innerHTML = `
      <td>${artigoAtualizado.nome}</td>
      <td>${artigoAtualizado.categoria}</td>
      <td>${artigoAtualizado.quantidade}</td>
      <td>
      <button onclick="atualizarArtigo('${id_artigo}','${artigoAtualizado.nome}','${artigoAtualizado.quantidade}','${artigoAtualizado.id_categoria}')">Atualizar</button>
      <button onclick="apagarArtigo('${id_artigo}')">Apagar</button>
    </td>
    `;
    } else {
      alert("Erro na atualização do artigo, tente novamente!");
      dialog.close();
    }
  });
}

async function atualizarCategoria(id_categoria, tipo_categoria) {
  const linhaCategoria = document.querySelector(
    `tr[id_categoria="${id_categoria}"]`
  );
  const dialog = document.getElementById("dialog");

  dialog.innerHTML = `
      <h2>Atualizar Categoria</h2>
      <form>
        <input type="text" name="tipo" value="${tipo_categoria}">
        <button type="submit">Submeter Atualização</button>
      </form>
      <button onclick="dialog.close()">Cancelar</button>
`;

  dialog.showModal();

  dialog.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(dialog.querySelector("form"));
    const tipo = formData.get("tipo");

    const data = {
      tipo: tipo,
    };

    const response = await updateCategoria(id_categoria, data);
    if (response.message) {
      alert(response.message);
      dialog.close();
      linhaCategoria.innerHTML = `
      <td>${tipo}</td>
      <td>
        <button onclick="atualizarCategoria('${id_categoria}','${tipo}')">
          Atualizar
        </button>
        <button onclick="apagarCategoria('${id_categoria}')">
          Apagar
        </button>
      </td>
      `;
    } else {
      alert("Erro na atualização da categoria, tente novamente!");
      dialog.close();
    }
  });
}

async function apagarArtigo(id) {
  if (confirm("Tem a certeza que deseja apagar o artigo?")) {
    const response = await deleteArtigo(id);
    if (response.message) {
      alert(response.message);
      location.reload();
    } else {
      alert("Erro ao apagar o artigo, tente novamente!");
    }
  }
}

async function apagarCategoria(id) {
  if (confirm("Tem a certeza que deseja apagar a categoria?")) {
    const response = await deleteCategoria(id);
    if (response.message) {
      alert(response.message);
      location.reload();
    } else {
      alert("Erro ao apagar a categoria, tente novamente!");
    }
  }
}

async function selectCategoriasOptions() {
  const selectCategorias = document.getElementById("selectCategorias");
  const listaCategorias = await getCategorias();

  const optionTodasCategorias = document.createElement("option");
  optionTodasCategorias.value = -1;
  optionTodasCategorias.textContent = "Todas as Categorias";
  selectCategorias.appendChild(optionTodasCategorias);

  const optionSemCategoria = document.createElement("option");
  optionSemCategoria.value = 0;
  optionSemCategoria.textContent = "Sem Categoria";
  selectCategorias.appendChild(optionSemCategoria);

  listaCategorias.forEach((categoria) => {
    const option = document.createElement("option");
    option.value = categoria.id_categoria;
    option.textContent = categoria.tipo;
    selectCategorias.appendChild(option);
  });

  selectCategorias.onchange = function () {
    adicionarTabelaArtigosDOM();
  };
}

function pesquisaPorNome(event) {
  event.preventDefault();
  adicionarTabelaArtigosDOM();
}

function resetPesquisaPorNome(event) {
  event.preventDefault();
  const pesquisaNome = document.getElementById("pesquisaNome");
  pesquisaNome.value = "";
  adicionarTabelaArtigosDOM();
}

selectCategoriasOptions();
adicionarTabelaArtigosDOM();
adicionarTabelaCategoriasDOM();