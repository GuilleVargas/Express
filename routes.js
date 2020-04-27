const express = require('express');
const router = express.Router();

//RUTAS

//Ruta inicial
router.get('/', (req/*lo que recibimos del navegador*/, res/*Lo que le voy a devolver al navegador*/)/*Esto es function() */ => {
    {
        res.render('index.ejs');
    }
}); 

//Vamos a agregar la ruta login
router.get('/login', (req, res) => {
    {
        res.render('login'); //Para que renderice el archivo login
    }
}); 



/*Router va a ser un objeto que estamos exportando */
module.exports = router;