const authorHanlder = (req, res, next) => {
    req.author = {
        "name":"Matias",
        "lastname": "Alvarez"
    }
    next();
}

module.exports = authorHanlder;