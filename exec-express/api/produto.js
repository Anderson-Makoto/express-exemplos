module.exports = (app, valor) => {
    const salvar = (req, res) => {
        res.send("salvou!!!" + valor)
    }

    const obter = (req, res) => {
        res.send("obteve!!!" + valor)
    }

    app.get('/produto', salvar)
    app.post('/produto', obter)
}