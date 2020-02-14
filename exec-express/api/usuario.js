const salvar = (req, res) => {
    res.send("usuario > salvar")
}

const obter = (req, res) => {
    res.send("salvar")
}

module.exports = {obter: obter, salvar: salvar}