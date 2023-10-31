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
  const values = [
    [body.nome, body.id_categoria, body.quantidade, body.datainsercao],
  ];

  const connection = openMySqlConnection();
  const queryIArtigo =
    "INSERT INTO artigo (nome, id_categoria, quantidade, datainsercao) VALUES (?)";

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
  const querySArtigos =
    "SELECT * FROM artigo LEFT JOIN categoria ON artigo.id_categoria = categoria.id_categoria;";
  connection.query(querySArtigos, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }

    console.log(
      "Close connection to MySql database: " + connection.config.database
    );
    connection.end();
  });
};

const getArtigoPorId = (req, res) => {
  const id = req.params.id;

  const connection = openMySqlConnection();

  const querySArtigo = "SELECT * FROM artigo WHERE id_artigo = ?;";

  connection.query(querySArtigo, id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
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
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }

    console.log(
      "Close connection to MySql database: " + connection.config.database
    );
    connection.end();
  });
};

const updateArtigo = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const connection = openMySqlConnection();

  const queryUArtigo =
    "UPDATE artigo SET nome = ?, id_categoria = ?, quantidade = ? WHERE id_artigo = ?;";
  const values = [[body.nome], [body.id_categoria], [body.quantidade], [id]];

  connection.query(queryUArtigo, values, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json({
        message: "Artigo atualizado com sucesso",
        resourceId: id,
      });
    }
    console.log(
      "Close connection to MySql database: " + connection.config.database
    );
    connection.end();
  });
};

const updateCategoria = (req, res) => {
  const id = req.params.id;
  const body = req.body;

  const connection = openMySqlConnection();

  const queryUCategoria =
    "UPDATE categoria SET tipo = ? WHERE id_categoria = ?;";
  const values = [[body.tipo], [id]];

  connection.query(queryUCategoria, values, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json({
        message: "Categoria atualizada com sucesso",
        resourceId: id,
      });
    }
    console.log(
      "Close connection to MySql database: " + connection.config.database
    );
    connection.end();
  });
};

const deleteArtigo = (req, res) => {
  const id = req.params.id;
  console.log(id);
  const connection = openMySqlConnection();

  const queryDArtigo = "DELETE FROM artigo WHERE id_artigo = ?;";

  connection.query(queryDArtigo, id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json({
        message: "Artigo apagado com sucesso!",
        resourceId: id,
      });
    }

    console.log(
      "Close connection to MySql database: " + connection.config.database
    );
    connection.end();
  });
};

const deleteCategoria = (req, res) => {
  const id = req.params.id;
  const connection = openMySqlConnection();

  const queryUArtigos =
    "UPDATE artigo SET id_categoria = null WHERE id_categoria = ?;";
  const queryDCategoria = "DELETE FROM categoria WHERE id_categoria = ?;";

  connection.query(queryUArtigos, id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      connection.query(queryDCategoria, id, (err, result) => {
        if (err) {
          res.json(err);
        } else {
          res.json({
            message: "Categoria apagada com sucesso!",
            resourceId: id,
          });
        }
        console.log(
          "Close connection to MySql database: " + connection.config.database
        );
        connection.end();
      });
    }
  });
};

module.exports = {
  addArtigo,
  addACategoria,
  getArtigos,
  getArtigoPorId,
  getArtigosPorCategoria,
  getArtigosPorNome,
  getCategorias,
  updateArtigo,
  updateCategoria,
  deleteArtigo,
  deleteCategoria,
};
