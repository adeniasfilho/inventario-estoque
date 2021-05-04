import express, { json } from "express";
const app = express();
app.use(json());

let unidadesAdquiridas = 0;
let saida = 0;
let controle = unidadesAdquiridas - saida;
let id = 1;

let estoque = [
  {
    id: 1,
    minimoEstoque: 5,
    referenciasLojista: "Ponto Frio",
    produto: "Televisão",
    tipo: "oled",
    unidadesAdquiridas: 10,
    saida: 5,
    controle: unidadesAdquiridas - saida,
  },
];
let estoque_ativo = [];

app.post("/estoque", (req, res, next) => {
  const estoque_ativo = {
    id: (id += 1),
    minimoEstoque: req.body.minimoEstoque,
    referenciasLojista: req.body.referenciasLojista,
    produto: req.body.produto,
    tipo: req.body.tipo,
    unidadesAdquiridas: req.body.unidadesAdquiridas,
    saida: req.body.saida,
    total: req.body.total,
  };
  estoque.push(estoque_ativo);
  res.status(201).json(estoque_ativo);
});
app.get("/estoque", (req, res, next) => {
    res.json(estoque);
  });

app.put("/estoque", (req, res, next) => {
  estoque.forEach((estoque_ativo) => {
    if (estoque_ativo.id === req.body.id) {
      estoque_ativo.minimoEstoque = req.body.minimoEstoque;
      estoque_ativo.referenciasLojista = req.body.referenciasLojista;
      estoque_ativo.produto = req.body.produto;
      estoque_ativo.tipo = req.body.tipo;
      estoque_ativo.unidadesAdquiridas = req.body.unidadesAdquiridas;
      estoque_ativo.saida = req.body.saida;
      estoque_ativo.total = req.body.total;
    }
  });
  res.status(204).end();
});
app.delete("/estoque", (req, res, next) => {
  estoque.forEach((estoque_ativo) => {
    if (estoque_ativo.id != req.body.id) {
      const estoque_ativo = {
        id : estoque_ativo.id,
        minimoEstoque: estoque_ativo.minimoEstoque,
        referenciasLojista: estoque_ativo.referenciasLojista,
        produto: estoque_ativo.produto,
        tipo: estoque_ativo.tipo,
        unidadesAdquiridas: estoque_ativo.unidadesAdquiridas,
        saida: estoque_ativo.saida,
        total: estoque_ativo.total,
      };
      estoque_ativo.push(estoque_ativo);
    }
  });
  estoque = estoque_ativo;
  res.status(204).end();
});
app.listen(3000, () => {
  console.log("Estoque. Porta 3000.");
});
