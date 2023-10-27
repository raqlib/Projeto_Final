const sqlUtils = require("./sql.js");

const express = require("express");
const app = express();
const port = 3000;

// Middleware - Evitar CORS (Autoriza operações HTTP no próprio computador)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Middleware - Json
app.use(express.json());

// Create Routes
app.post("/api/artigo/add", sqlUtils.addArtigo);
app.post("/api/categoria/add", sqlUtils.addACategoria);

// Read Routes
app.get("/api/artigos", sqlUtils.getArtigos);
app.get("/api/artigos/categoria/:idCategoria", sqlUtils.getArtigosPorCategoria);
app.get("/api/artigos/nome/:nome", sqlUtils.getArtigosPorNome);
app.get("/api/categorias", sqlUtils.getCategorias);

// Update Routes
app.post("/api/artigo/update", sqlUtils.updateArtigo);
app.post("/api/categoria/update", sqlUtils.updateCategoria);

// Delete Routes
app.delete("/api/artigo/delete/:id", sqlUtils.deleteArtigo);
app.delete("/api/categoria/delete/:id", sqlUtils.deleteCategoria);

app.listen(port, () => {
  console.log(
    "Server listen on port " + port + " (http://localhost:" + port + ")"
  );
});
