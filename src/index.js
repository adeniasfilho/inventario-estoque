import express, {json} from "express";
const app = express();
app.use(json());

let id = 2;
let unidadesAdquiridas = 0;
let saida = 0;
let controle = (unidadesAdquiridas - saida);

id = json.id;
let estoque = [json, id];
const estoque_ativo = {
    id: 1,
    minimoEstoque: 5,
    referenciasLojista: "Ponto Frio",
    produto: "Televisão",
    tipo: "oled",
    unidadesAdquiridas: 10,
    saida: 5,
    controle: (unidadesAdquiridas - saida)
};
app.get("/estoque", (req, res, next) => {
    res.json(estoque_ativo);
});
app.post("/estoque", (req, res, next) => {
    const estoque_ativo = {
        
        id: id+=1,
        minimoEstoque: req.body.minimoEstoque,
        referenciasLojista: req.body.referenciasLojista,
        produto: req.body.produto,
        tipo: req.body.tipo,
        unidadesAdquiridas: req.body.unidadesAdquiridas,
        saida: req.body.saida,
        total: req.body.total
    };
    estoque.push(estoque_ativo)
    res.status(201).json(estoque);
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
    })
    res.status(201).json(estoque);
});
app.delete("/estoque/:id", (req, res, next) => {
    const idReferenciasLojistaDeletado = req.params.id;
    estoque.forEach((estoque, index) => {
        if (estoque_ativo.id == idReferenciasLojistaDeletado) estoque.splice(index,1);
    })
    res.status(201).json(estoque);
});
app.listen(3000, () => {
    console.log("Estoque. Porta 3000.")
})