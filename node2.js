var router = require('./router');

var app = router(3412);

var operadoras = [{
    nome: "Oi",
    codigo: 14,
    categoria: "Celular",
    preco: 2
}, {
    nome: "Vivo",
    codigo: 15,
    categoria: "Celular",
    preco: 1
}, {
    nome: "Tim",
    codigo: 41,
    categoria: "Celular",
    preco: 3
}, {
    nome: "GVT",
    codigo: 25,
    categoria: "Fixo",
    preco: 1
}, {
    nome: "Embratel",
    codigo: 21,
    categoria: "Fixo",
    preco: 2
}];

var contatos = [{
    nome: "Bruno",
    telefone: "99998888",
    data: new Date(),
    operadora: {
        nome: "Oi",
        codigo: 14,
        categoria: "Celular"
    }
}, {
    nome: "Sandra",
    telefone: "99998877",
    data: new Date(),
    operadora: {
        nome: "Vivo",
        codigo: 15,
        categoria: "Celular"
    }
}, {
    nome: "Mariana",
    telefone: "99998866",
    data: new Date(),
    operadora: {
        nome: "Tim",
        codigo: 41,
        categoria: "Celular"
    }
}];

app.get('/operadoras', function(req, res) {
    res.write(JSON.stringify(operadoras));
    res.end();
});
app.get('/contatos', function(req, res) {
    res.write(JSON.stringify(contatos));
    res.end();
});
app.post('/contatos', function(req, res){
  res.end();
});
