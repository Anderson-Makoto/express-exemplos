const mid = nome => {
    console.log(nome)

    return (req, res, next) => {
        next()
    }
}

module.exports = mid