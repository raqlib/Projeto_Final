// Função para criar um novo artigo
async function createArtigo(data) {
  try {
    const response = await fetch('/API/Artigo/Add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Erro ao criar artigo:', error);
    throw error;
  }
}

// Função para criar uma nova categoria
async function createCategoria(data) {
  try {
    const response = await fetch('/API/Categoria/Add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Erro ao criar categoria:', error);
    throw error;
  }
}

// Função para buscar todos os artigos
async function getArtigos() {
  try {
    const response = await fetch('/API/Artigos');
    const artigos = await response.json();
    return artigos;
  } catch (error) {
    console.error('Erro ao buscar artigos:', error);
    throw error;
  }
}

// Função para buscar todas as categorias
async function getCategorias() {
  try {
    const response = await fetch('/API/Categorias');
    const categorias = await response.json();
    return categorias;
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    throw error;
  }
}

// Função para atualizar um artigo
async function updateArtigo(id, data) {
  try {
    const response = await fetch(`/API/Artigo/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Erro ao atualizar artigo:', error);
    throw error;
  }
}

// Função para atualizar uma categoria
async function updateCategoria(id, data) {
  try {
    const response = await fetch(`/API/Categorias/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Erro ao atualizar categoria:', error);
    throw error;
  }
}

// Função para excluir um artigo
async function deleteArtigo(id) {
  try {
    const response = await fetch(`/API/Artigo/delete/${id}`, {
      method: 'DELETE'
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Erro ao excluir artigo:', error);
    throw error;
  }
}

// Função para excluir uma categoria
async function deleteCategoria(id) {
  try {
    const response = await fetch(`/API/Categorias/delete/${id}`, {
      method: 'DELETE'
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Erro ao excluir categoria:', error);
    throw error;
  }
      }


function createArtigosTable(artigos) {
  const table = document.createElement('table');
  table.innerHTML = `
    <thead>
      <tr>
        <th>Nome</th>
        <th>Categoria</th>
        <th>Quantidade</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;

  const tbody = table.querySelector('tbody');

  artigos.forEach((artigo) => {
    const row = document.createElement('tr');
    row.setAttribute('data-id', artigo.id); // Adicione o atributo data-id
    row.innerHTML = `
      <td>${artigo.nome}</td>
      <td>${artigo.categoria}</td>
      <td>${artigo.quantidade}</td>
      <td>
        <button onclick="atualizarArtigo(${artigo.id})">Atualizar</button>
        <button onclick="apagarArtigo(${artigo.id})">Apagar</button>
      </td>
    `;

    tbody.appendChild(row);
  });

  return table;
}

const tabelaContainer = document.getElementById('tabela-container');
tabelaContainer.appendChild(createArtigosTable(artigosArray));

function atualizarArtigo(id) {
  // Encontre a linha da tabela correspondente ao artigo que deseja atualizar
  const row = document.querySelector(`tr[data-id="${id}"]`);

  // Crie um formulário de atualização
  const form = document.createElement('form');
  form.innerHTML = `
    <input type="text" name="nome" placeholder="Novo Nome">
    <input type="text" name="categoria" placeholder="Nova Categoria">
    <input type="number" name="quantidade" placeholder="Nova Quantidade">
    <button type="submit">Salvar</button>
  `;

  // Manipule o envio do formulário para atualizar o artigo
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const nome = formData.get('nome');
    const categoria = formData.get('categoria');
    const quantidade = formData.get('quantidade');

    // Envie uma solicitação para a rota de atualização do artigo com os novos dados
    const response = await fetch(`/API/Artigo/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome, categoria, quantidade })
    });

    if (response.ok) {
      // Atualização bem-sucedida, atualize a linha na tabela
      const updatedArtigo = await response.json();
      row.innerHTML = `
        <td>${updatedArtigo.nome}</td>
        <td>${updatedArtigo.categoria}</td>
        <td>${updatedArtigo.quantidade}</td>
        <td>
          <button onclick="atualizarArtigo(${updatedArtigo.id})">Atualizar</button>
          <button onclick="apagarArtigo(${updatedArtigo.id})">Apagar</button>
        </td>
      `;

      // Remova o formulário
      form.remove();
    } else {
      console.error('Erro na atualização do artigo');
    }
  });

  // Adicione o formulário logo abaixo da linha do artigo
  row.parentNode.insertBefore(form, row.nextSibling);
}

