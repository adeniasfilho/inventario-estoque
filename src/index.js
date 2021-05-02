
import express, { json } from "express";
const app = express();
app.use(json());

let id = 2;
/*let minimoEstoque = 5;
let referenciasLojista = "Ponto Frio";
let produto = "Televisão";
let tipo = "oled";*/
let unidadesAdquiridas;
let saida ;
let total = (unidadesAdquiridas - saida);

json = {
    
    id:1,
    minimoEstoque: 5,
    referenciasLojista: "Ponto Frio",
    produto: "Televisão",
    tipo: "oled",
    unidadesAdquiridas: 10,
    saida: 5,
    total: (unidadesAdquiridas - saida)
};

id = json.id;
const estoque = [json, id];

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
app.set("port", porta);
const porta = 3000;
const server = createServer(app);
server.listen(3000);
