const express = require('express')
const app = express()
const mid = require('./reqMid')
const bodyParser = require('body-parser')
const usuarioApi = require('./api/usuario')
const produto = require('./api/produto')

app.use(bodyParser.json())

produto(app, "makoto")

app.post('/salvar', usuarioApi.salvar)
app.post('/obter', usuarioApi.obter)

app.post('/postMethod', (req, res) => {
    res.send(req.body)
})

app.use(mid("makoto"))

app.use((req, res, next) => {
    console.log('antes')

    next()
})

app.get('/rota/:valor', (req, res) => {
    res.send(req.params.valor)
})

app.get('/rota2', (req, res) => {
    res.send(req.query.valor)
})

app.get("/", (req, res) => {
    res.json({
        obj: {
            valor1: {
                subv: 'nome',
                subv2: 12
            },
            valor2: 'string'
        }
    })
})

app.listen(3000, () => {
    console.log("backend rodando...")
})