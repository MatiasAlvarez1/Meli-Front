const Error = require("../models/error");

const errorHandler = (err, req, res, next) => {
    res.json(new Error(500, "Ocurrio un error al procesar la transaccion, Intentelo luego nuevamente."));
}

module.exports = errorHandler;