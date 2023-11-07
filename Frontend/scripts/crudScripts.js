// Scripts JavaScript Fetch API

const APIbaseURL = "http://localhost:3000";

// CREATE FETCHS *************************************************************

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

// READ FETCHS *************************************************************

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

// Função para buscar um artigo
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

// UPDATE FETCHS *************************************************************

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

// DELETE FETCHS *************************************************************

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

// Scripts JavaScript Manipulação DOM

// Funções Criação das Tabelas *************************************************************

//Função para Criar a Tabela de Artigos
function criarTabelaArtigos(listaArtigos) {
  const tabelaArtigos = document.createElement("table");
  tabelaArtigos.id = "tabelaArtigos";
  tabelaArtigos.classList.add("table");
  tabelaArtigos.classList.add("table-striped");
  tabelaArtigos.classList.add("table-hover");
  tabelaArtigos.innerHTML = `
        <thead id="cabecalhoTabelaArtigos">
          <tr>
            <th scope="col" class="text-center">Nome</th>
            <th scope="col" class="text-center">Categoria</th>
            <th scope="col" class="text-center">Quantidade</th>
            <th scope="col" class="text-center">Data de Inserção</th>
            <th scope="col" class="text-center">Ações</th>
          </tr>
        </thead>
        <tbody id="corpoTabelaArtigos"></tbody>
      `;

  const corpoTabelaArtigos = tabelaArtigos.querySelector("tbody");

  listaArtigos.forEach((artigo) => {
    const linha = document.createElement("tr");
    linha.setAttribute("id_artigo", artigo.id_artigo);
    linha.innerHTML = `
          <td class="align-middle">${artigo.nome}</td>
          <td class="text-center align-middle">${
            artigo.tipo ? artigo.tipo : ""
          }</td>
          <td class="text-center align-middle">${artigo.quantidade}</td>
          <td class="text-center align-middle">${
            artigo.datainsercao.split("T")[0]
          }</td>
          <td class="text-center align-middle">
            <button class="btn btn-outline-success p-1" onclick="atualizarArtigo('${
              artigo.id_artigo
            }','${artigo.nome}','${artigo.quantidade}','${
      artigo.id_categoria
    }')">Atualizar</button>
            <button class="btn btn-outline-danger p-1" onclick="apagarArtigo('${
              artigo.id_artigo
            }')">Apagar</button>
          </td>
        `;
    corpoTabelaArtigos.appendChild(linha);
  });

  return tabelaArtigos;
}

//Função para Criar a Tabela de Categorias
function criarTabelaCategorias(listaCategorias) {
  const tabelaCategorias = document.createElement("table");
  tabelaCategorias.id = "tabelaCategorias";
  tabelaCategorias.classList.add("table");
  tabelaCategorias.classList.add("table-striped");
  tabelaCategorias.classList.add("table-hover");
  tabelaCategorias.innerHTML = `
        <thead id="cabecalhoTabelaCategorias">
          <tr>
            <th scope="col" class="text-center">Tipo</th>
            <th scope="col" class="text-center">Ações</th>
          </tr>
        </thead>
        <tbody id="corpoTabelaCategorias"></tbody>
      `;

  const corpoTabelaCategorias = tabelaCategorias.querySelector("tbody");

  listaCategorias.forEach((categoria) => {
    const linha = document.createElement("tr");
    linha.setAttribute("id_categoria", categoria.id_categoria);
    linha.innerHTML = `
          <td class="text-center align-middle">${categoria.tipo}</td>
          <td class="text-center align-middle">
            <button class="btn btn-outline-success p-1" onclick="atualizarCategoria('${categoria.id_categoria}','${categoria.tipo}')">Atualizar</button>
            <button class="btn btn-outline-danger p-1" onclick="apagarCategoria('${categoria.id_categoria}')">Apagar</button>
          </td>
        `;
    corpoTabelaCategorias.appendChild(linha);
  });

  return tabelaCategorias;
}

// Funções Adicionar Tabelas ao DOM *************************************************************

// Função para Filtrar e Ordenar Lista de Artigos

function filtrarOrdenarArtigos(listaArtigos) {
  // Filtrar e Ordenar Lista de Artigos
  const selectCategorias = document.getElementById("selectCategorias");
  let id_categoriaSelecionada = selectCategorias.value;
  const pesquisaNome = document.getElementById("pesquisaNome");
  const selectOrderArtigosBy = document.getElementById("selectOrderArtigosBy");
  let orderArtigosBy = selectOrderArtigosBy.value;
  const selectOrderAscOrDesc = document.getElementById("selectOrderAscOrDesc");
  let orderAscOrDesc = selectOrderAscOrDesc.value;
  let listaArtigosFiltradosEOrdenados = [];

  // Filtrar
  if (id_categoriaSelecionada == -1) {
    listaArtigosFiltradosEOrdenados = listaArtigos;
  } else {
    if (id_categoriaSelecionada == 0) {
      id_categoriaSelecionada = null;
    }
    listaArtigosFiltradosEOrdenados = listaArtigos.filter(
      (artigo) => artigo.id_categoria == id_categoriaSelecionada
    );
  }
  if (pesquisaNome.value) {
    listaArtigosFiltradosEOrdenados = listaArtigosFiltradosEOrdenados.filter(
      (artigo) =>
        artigo.nome.toLowerCase().includes(pesquisaNome.value.toLowerCase())
    );
  }

  // Ordenar
  switch (orderArtigosBy) {
    case "nome": {
      listaArtigosFiltradosEOrdenados.sort((a, b) =>
        a.nome.localeCompare(b.nome)
      );
      break;
    }
    case "categoria": {
      listaArtigosFiltradosEOrdenados.sort((a, b) => {
        const tipoA = a.tipo || "";
        const tipoB = b.tipo || "";
        return tipoA.localeCompare(tipoB);
      });
      break;
    }
    case "quantidade": {
      listaArtigosFiltradosEOrdenados.sort(
        (a, b) => a.quantidade - b.quantidade
      );
      break;
    }
    case "datainsercao": {
      listaArtigosFiltradosEOrdenados.sort(
        (a, b) => new Date(a.datainsercao) - new Date(b.datainsercao)
      );
      break;
    }
  }

  if (orderAscOrDesc == "desc") {
    listaArtigosFiltradosEOrdenados.reverse();
  }

  return listaArtigosFiltradosEOrdenados;
}

//Função para Adicionar a Tabela de Artigos ao DOM
async function adicionarTabelaArtigosDOM() {
  const listaArtigos = await getArtigos();

  listaArtigosFiltradosEOrdenados = filtrarOrdenarArtigos(listaArtigos);

  const tabelaArtigosContainer = document.getElementById(
    "tabelaArtigosContainer"
  );
  tabelaArtigosContainer.innerHTML = "";

  if (listaArtigosFiltradosEOrdenados.length == 0) {
    tabelaArtigosContainer.innerHTML = `
        <p>Não existem artigos no inventário</p>
        `;
  } else {
    tabelaArtigosContainer.appendChild(
      criarTabelaArtigos(listaArtigosFiltradosEOrdenados)
    );
  }
}

//Função para Adicionar os Últimos 10 Artigos ao DOM
async function adicionarTabelaUltimos10ArtigosDOM() {
  const listaArtigos = await getArtigos();

  listaUltimos10Artigos = listaArtigos.reverse().slice(0, 10);

  const tabelaUltimos10ArtigosContainer = document.getElementById(
    "tabelaUltimos10ArtigosContainer"
  );
  tabelaUltimos10ArtigosContainer.innerHTML = "";

  if (listaUltimos10Artigos.length == 0) {
    tabelaUltimos10ArtigosContainer.innerHTML = `
        <p>Não existem artigos no inventário</p>
        `;
  } else {
    tabelaUltimos10ArtigosContainer.appendChild(
      criarTabelaArtigos(listaUltimos10Artigos)
    );
  }
}

//Função para Adicionar a Tabela de Categorias ao DOM
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

// Funções Botões das Ações Atualizar e Apagar *************************************************************

//Função para Atualizar um Artigo
async function atualizarArtigo(id_artigo, nome, quantidade, id_categoria) {
  const linhaArtigo = document.querySelector(`tr[id_artigo="${id_artigo}"]`);
  const dialog = document.getElementById("dialog");
  dialog.innerHTML = `
          <h3>Atualizar Artigo</h3>
          <form>
            <label> Nome:
              <input type="text" name="nome" value="${nome}">
            </label>
            <label> Categoria:
              <select name="categoria">
              </select>
            </label>
            <label> Quantidade:
              <input type="number" name="quantidade" value="${quantidade}">
            </label>
            <div>
              <button class="btn btn-outline-success p-1" type="submit">Atualizar</button>
              <button class="btn btn-outline-danger p-1" type="reset" onclick="dialog.close()">Cancelar</button>
            </div>
          </form>
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

    const response = await updateArtigo(id_artigo, data);
    if (response.message) {
      dialog.innerHTML = `
      <p>${response.message}</p>
      <button class="btn btn-outline-success p-1" onclick="dialog.close()">Fechar</button>
      `;

      const artigoAtualizado = await getArtigo(id_artigo);
      console.log(artigoAtualizado);
      linhaArtigo.innerHTML = `
          <td class="align-middle">${artigoAtualizado.nome}</td>
          <td class="text-center align-middle">${artigoAtualizado.tipo}</td>
          <td class="text-center align-middle">${
            artigoAtualizado.quantidade
          }</td>
          <td class="text-center align-middle">${
            artigoAtualizado.datainsercao.split("T")[0]
          }</td>
          <td class="text-center align-middle">
          <button class="btn btn-outline-success p-1" onclick="atualizarArtigo('${id_artigo}','${
        artigoAtualizado.nome
      }','${artigoAtualizado.quantidade}','${
        artigoAtualizado.id_categoria
      }')">Atualizar</button>
          <button class="btn btn-outline-danger p-1" onclick="apagarArtigo('${id_artigo}')">Apagar</button>
          </td>
        `;
    } else {
      alert("Erro na atualização do artigo, tente novamente!");
      dialog.close();
    }
  });
}

//Função para Atualizar uma Categoria
async function atualizarCategoria(id_categoria, tipo_categoria) {
  const linhaCategoria = document.querySelector(
    `tr[id_categoria="${id_categoria}"]`
  );
  const dialog = document.getElementById("dialog");

  dialog.innerHTML = `
          <h3>Atualizar Categoria</h3>
          <form>
            <label> Tipo:
              <input type="text" name="tipo" value="${tipo_categoria}">
            </label>
            <div>
              <button class="btn btn-outline-success p-1" type="submit">Atualizar</button>
              <button class="btn btn-outline-danger p-1" type="reset" onclick="dialog.close()">Cancelar</button>
            </div>
          </form>
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
      dialog.innerHTML = `
      <p>${response.message}</p>
      <button class="btn btn-outline-success p-1" onclick="dialog.close()">Fechar</button>
      `;

      linhaCategoria.innerHTML = `
          <td class="text-center align-middle">${tipo}</td>
          <td class="text-center align-middle">
            <button class="btn btn-outline-success p-1" onclick="atualizarCategoria('${id_categoria}','${tipo}')">
              Atualizar
            </button>
            <button class="btn btn-outline-danger p-1" onclick="apagarCategoria('${id_categoria}')">
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

// Função para Apagar um Artigo
async function apagarArtigo(id) {

  const dialog = document.getElementById("dialog");
  dialog.innerHTML = `
          <h3>Apagar Artigo</h3>
          <button id="botaoApagar" class="btn btn-outline-success p-1" onclick="onclickApagar()">Apagar</button>
          <button class="btn btn-outline-danger p-1" onclick="dialog.close()">Cancelar</button>
    `;
  dialog.showModal();

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

// Função para Apagar uma Categoria
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

// Outras Funções *************************************************************

// Função para adicionar as opçoes de categorias ao select do form de pesquisa
async function adicionarOpcoesCategoriasSelectForm() {
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

// Função para a pesquisa por nome e atualizar a tabela de artigos
function pesquisaPorNome(event) {
  event.preventDefault();
  adicionarTabelaArtigosDOM();
}

// Função para fazer o reset à pesquisa por nome e pesquisa por categoria e atualizar a tabela de artigos

function resetPesquisaPorNome(event) {
  event.preventDefault();
  const selectCategorias = document.getElementById("selectCategorias");
  selectCategorias.value = -1;
  const pesquisaNome = document.getElementById("pesquisaNome");
  pesquisaNome.value = "";

  const selectOrderArtigosBy = document.getElementById("selectOrderArtigosBy");
  selectOrderArtigosBy.value = "id_artigo";
  const selectOrderAscOrDesc = document.getElementById("selectOrderAscOrDesc");
  selectOrderAscOrDesc.value = "asc";

  adicionarTabelaArtigosDOM();
}

// Chamada de Funções Inicial *************************************************************
const currentPath =
  location.pathname.split("/")[location.pathname.split("/").length - 1];

switch (currentPath) {
  case "index.html": {
    adicionarOpcoesCategoriasSelectForm();
    adicionarTabelaUltimos10ArtigosDOM();
    break;
  }
  case "artigos.html": {
    adicionarOpcoesCategoriasSelectForm();
    adicionarTabelaArtigosDOM();
    break;
  }
  case "categorias.html": {
    adicionarTabelaCategoriasDOM();
    break;
  }
  case "resumo.html": {
    console.log("Entrou na página de resumo do inventário!");
    break;
  }
}
