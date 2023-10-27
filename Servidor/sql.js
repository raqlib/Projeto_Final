const mysql = require("mysql");

const openMySqlConnection = () => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "inventory_tracking",
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
  const body = req.body;
  const values = [[body.nome, body.id_categoria, body.quantidade]];

  const connection = openMySqlConnection();
  const queryIArtigo =
    "INSERT INTO artigo (nome, id_categoria, quantidade) VALUES (?)";

  connection.query(queryIArtigo, values, (err, result) => {
    if (err) res.json(err);

    res.send("Artigo Introduzido com Sucesso com o ID:" + result.insertId);

    console.log(
      "Close connection to MySql database: " + connection.config.database
    );
    connection.end();
  });
};

const addACategoria = (req, res) => {
  const body = req.body;
  const values = [[body.tipo]];

  const connection = openMySqlConnection();
  const queryICategoria = "INSERT INTO categoria (tipo) VALUES (?)";

  connection.query(queryICategoria, values, (err, result) => {
    if (err) res.json(err);

    res.send("Categoria Introduzida com Sucesso com o ID:" + result.insertId);

    console.log(
      "Close connection to MySql database: " + connection.config.database
    );
    connection.end();
  });
};

const getArtigos = (req, res) => {
  const connection = openMySqlConnection();
  const querySArtigos = "SELECT * FROM artigo;";
  connection.query(querySArtigos, (err, result) => {
    if (err) res.json(err);

    res.json(result);

    console.log(
      "Close connection to MySql database: " + connection.config.database
    );
    connection.end();
  });
};

const getArtigosPorCategoria = () => {};
const getArtigosPorNome = () => {};

const getCategorias = (req, res) => {
  const connection = openMySqlConnection();
  const querySCategorias = "SELECT * FROM categoria;";
  connection.query(querySCategorias, (err, result) => {
    if (err) res.json(err);

    res.json(result);

    console.log(
      "Close connection to MySql database: " + connection.config.database
    );
    connection.end();
  });
};

const updateArtigo = (req, res) => {
  const body = req.body;

  const connection = openMySqlConnection();

  const queryUArtigo =
    "UPDATE artigo SET nome = ?, id_categoria = ?, quantidade = ? WHERE id = ?;";
  const values = [
    [body.nome],
    [body.id_categoria],
    [body.quantidade],
    [body.id],
  ];

  connection.query(queryUArtigo, values, (err, result) => {
    if (err) res.json(err);
    res.send("Artigo com o Id: " + body.id + " atualizado com sucesso!");

    console.log(
      "Close connection to MySql database: " + connection.config.database
    );
    connection.end();
  });
};

const updateCategoria = () => {};

const deleteArtigo = () => {};
const deleteCategoria = () => {};

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
  deleteCategoria,
};
