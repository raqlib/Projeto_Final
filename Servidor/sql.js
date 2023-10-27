const mysql = require("mysql");

const openMySqlConnection = () => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "meuprojetopg",
  });
  connection.connect((err) => {
    if (err) throw err;
    console.log(
      "Open MySql Connection! Database: " + connection.config.database
    );
  });
  return connection;
};

const addArtigo = (req, res) => {
  const bodyRequest = req.body;
  const values = [[bodyRequest.nome, bodyRequest.idCategoria, bodyRequest.quantidade]];

  const connection = openMySqlConnection();
  const queryIArtigo = "INSERT INTO artigo (nome, idCategoria, quantidade) VALUES (?)";

  connection.query(queryIArtigo, values, (err, result) => {
    if (err) res.json(err);

    res.send("Pessoa Introduzida com Sucesso com o ID:" + result.insertId);

    console.log(
      "Close connection to MySql database: " + connection.config.database
    );
    connection.end();
  });
};

const getPessoas = (req, res) => {
  const connection = openMySqlConnection();
  const querySPessoas = "SELECT * FROM pessoa;";
  connection.query(querySPessoas, (err, result) => {
    if (err) res.json(err);

    res.json(result);

    console.log(
      "Close connection to MySql database: " + connection.config.database
    );
    connection.end();
  });
};

const getPessoa = (req, res) => {
  const id = req.params.id;
  console.log(id);
  const connection = openMySqlConnection();
  const querySPessoa = "SELECT * FROM pessoa WHERE id = ?;";
  connection.query(querySPessoa, id, (err, result) => {
    if (err) res.json(err);

    res.json(result);

    console.log(
      "Close connection to MySql database: " + connection.config.database
    );
    connection.end();
  });
};

module.exports = {
  addArtigo,
  addACategoria,
  getArtigos,
  getArtigosPorCategoria,
  getArtigosPorNome,
  getCategorias,
  updateArtigo,
  updateCategoria,
  deleteArtigo,
  deleteCategoria
};