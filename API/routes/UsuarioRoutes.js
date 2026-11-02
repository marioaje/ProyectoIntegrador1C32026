const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

//GET
router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


//GET por ID
router.get('/:id', async (req, res) => {
    try {
        const usuarios = await Usuario.findById(req.params.id);

        if (!usuarios) {
            return res.status(404).json({ message: "Usuario no encontrado" + req.params.id });
        }

        res.json(usuarios);

        // {
        //   "message": "usuario is not defined",
        //   "otro": "errores"
        // }


    } catch (error) {
        res.status(500).json({
            message: error.message,
            otro: "errores"
        });
    }
});



//POST

router.post('/', async (req, res) => {
    try {
        const usuario = new Usuario(req.body);

        const usuarioGuardado = await usuario.save();

        res.status(201).json({
            mensaje: "Usuario creado",
            datos: usuarioGuardado
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});











//PUT por ID
router.put('/:id', async (req, res) => {
    try {
        const usuarios = await Usuario.findByIdAndUpdate(
            req.params.id,
            req.body, {
            new: true,
            runValidators: true
        }
        );

        if (!usuarios) {
            return res.status(404).json({ message: "Usuario no encontrado" + req.params.id });
        }

        res.json(
            {
                mensaje: "Usuario actualizado",
                datos: usuarios
            }
        );

        // {
        //   "message": "usuario is not defined",
        //   "otro": "errores"
        // }


    } catch (error) {
        res.status(500).json({
            message: error.message,
            otro: "errores"
        });
    }
});




//delete por ID
router.delete('/:id', async (req, res) => {
    try {
        const usuarios = await Usuario.findByIdAndDelete(
            req.params.id,
        );

        if (!usuarios) {
            return res.status(404).json({ message: "Usuario no encontrado" + req.params.id });
        }

        res.json(
            {
                mensaje: "Usuario eliminado",
                datos: req.params.id
            }
        );

        // {
        //   "message": "usuario is not defined",
        //   "otro": "errores"
        // }


    } catch (error) {
        res.status(500).json({
            message: error.message,
            otro: "errores"
        });
    }
});


module.exports = router;
