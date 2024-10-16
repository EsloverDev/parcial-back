exports.success = function(req, res, status, mensaje){
    res.status(status).send({
        error: false,
        status: status,
        msg: mensaje,
        body: req.body
    })
}

exports.error = function(req, res, status, mensaje){
    res.status(status).send({
        error: true,
        status: status,
        msg: mensaje
    })
}