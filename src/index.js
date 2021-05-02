import express from "express";

const express = require("express");
const app = express();
app.use(express.json());
const axios = require("axios");
const estoque = [];


const  estoque = {
    id,
    minimoEstoque,
    referenciasLojista,
    produto,
    tipo,
    unidadesAdquiridas,
    saida,
    total,
};
app.set("port", porta);
app.get("/estoque", (req, res, next) => {
    res.json(estoque);
});
app.post("/estoque", (req, res, next) => {
    const estoque = req.body;
    estoque.push({id:contador +=1, minimoEstoque:estoque.minimoEstoque,
        referenciasLojista:estoque.referenciasLojista,
        produto:estoque.produto, tipo:estoque.tipo, 
        unidadesAdquiridas:estoque.unidadesAdquiridas,
        saida:estoque.saida, total:estoque.total
});
    console.log(estoque);
    res.status(201).json(estoque);
});
app.put("/estoque", (req, res, next) => {
    estoque.forEach((estoque) => {
        if(estoque.id === req.body.id) {
            estoque.minimoEstoque = req.body.minimoEstoque;
            estoque.referenciasLojista = req.body.referenciasLojista;
            estoque.produto = req.body.produto;
            estoque.tipo = req.body.tipo;
            estoque.unidadesAdquiridas = req.body.unidadesAdquiridas;
            estoque.saida = req.body.saida;
            estoque.total = req.body.total;
        }
    })
    res.status(201).json(estoque);
});
app.delete("/estoque/:id", (req, res, next) => {
    const idReferenciasLojistaDeletado = req.params.id;
    estoque.forEach((estoque, index) => {
        if(estoque.id == idReferenciasLojistaDeletado) estoque.splice(index);
    })
    res.status(201).json(estoque);
});
const porta = 3000;
const server = http.createServer(app);
server.listen(3000);
