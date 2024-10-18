const express = require('express');
const respuesta = require('../src/util/respuesta');
const router = express.Router();

const eventos = [
    {
        id: 1,
        nombre: "Conferencia"
    },
    {
        id: 2,
        nombre: "Hackaton"
    },
    {
        id: 3,
        nombre: "Rueda de negocios"
    }
]

const participantes = [
    {
        codigo: "5677849514",
        nombre: "Diana",
        eventoId: 1,
        fechaIngreso: new Date()
    },
    {
        codigo: "84762145",
        nombre: "Edwin",
        eventoId: 2,
        fechaIngreso: new Date()
    },
    {
        codigo: "8479684215",
        nombre: "Juana",
        eventoId: 3,
        fechaIngreso: new Date()
    },
    {
        codigo: "7846325984",
        nombre: "David",
        eventoId: 2,
        fechaIngreso: new Date()
    }
]

router.post('/eventos/crear', (req, res) => {
    respuesta.success(req, res, 200, "Evento creado");
})

router.get('/eventos', (req, res) => {
    console.log("Lista de eventos: ", eventos);
    respuesta.success(req, res, 200, eventos);
})

router.get('/participantes', (req, res) => {
    console.log("Participantes: ", participantes)
    respuesta.success(req, res, 200, participantes);
})

module.exports = router;