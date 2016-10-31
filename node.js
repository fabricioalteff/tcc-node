var router = require('./router');

var app = router(3412);

var produtos = [{
    id: 1,
    nome: "Coca cola lata 350ml",
    ean: "7894900010015",
    preco: 2.5,
    categora: "Refrigerantes",
	qtd:0
}, {
    id: 2,
    nome: "Antarctica lata 350ml",
    ean: "7891991000796",
    preco: 3,
    categora: "Cervejas"
}, {
    id: 3,
    nome: "Budweiser lata 350ml",
    ean: "7891991010481",
    preco: 3.5,
    categora: "Cervejas"
}, {
    id: 4,
    nome: "Mucilon arroz 400g",
    ean: "7891000011287",
    preco: 12.99,
    categora: "Meercearia"
}, {
    id: 5,
    nome: "Colgate maxima proteÃ§Ã£o 90g",
    ean: "7891024134702",
    preco: 1.89,
    categora: "Higiene pessoal"
}];

var supermercados = [{
    id: 1,
    nome: 'Companhia da Cerveja',
    endereco: 'Av. Antonio Sanches Fernandes, 1092, Itaguai­ II, Caldas Novas Goiás'
}];

var clientes = [{
    id: 1,
    nome: 'Fabricio Alteff Cordeiro',
    cpf: '99988877766',
    telefone: '999996666',
    email: 'fulano@bol.com.br',
    endereco: [{
        id: 1,
        nome: 'casa',
        logradouro: 'Av. Araxá',
        numero: 's/n',
        complemento: 'Qd 17, Lt 8A',
        bairro: 'Jd Esmeralda',
        cep: '75690000',
        cidade: 'Caldas Novas',
        uf: 'go'
    }],
}];

app.interceptor(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.interceptor(function(req, res, next) {
    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    next();
});

app.get('/produtos', function(req, res) {
    res.write(JSON.stringify(produtos));
    res.end();
});

app.get('/supermercados', function(req, res) {
    res.write(JSON.stringify(supermercados));
    res.end();
});

app.get('/clientes', function(req, res) {
    res.write(JSON.stringify(clientes));
    res.end();
});

app.post('/produtos', function(req, res) {
    var produto = req.body;
    contatos.push(JSON.parse(produto));
    res.end();
});

app.post('/supermercados', function(req, res) {
    var supermercado = req.body;
    contatos.push(JSON.parse(supermercado));
    res.end();
});

app.post('/clientes', function(req, res) {
    var cliente = req.body;
    contatos.push(JSON.parse(cliente));
    res.end();
});

app.options('/supermercados', function(req, res) {
    res.end();
});
