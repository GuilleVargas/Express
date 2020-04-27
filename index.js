//Así creamos el servidor
const express = require('express');  //Requerimos express
const app = express(); //inicializamos express ejecutando esa función antes de utilizarlo
const morgan = require('morgan'); //Requerimos morgan

//Requiriendo rutas
const routes = require('./routes');
const routesApi = require('./routes-api.js');


//SETTINGS Express posee unas funciones que agregan variables
app.set('app-name', 'Mi primer server'); //Añade una nueva configuración
console.log(__dirname+ '/views'); //Esto es solo para ver que nos muestra __dirname(ruta del archivo actual)
app.set('views',  __dirname+'/views'); //Añadimos dónde vamos a colocarlo, en este caso en la carpeta views
app.set('view engine', 'ejs'); //Añadir un motor de plantilla, en este caso ejs
//IMPORTANTE npm install ejs


/*MIDDLEWARES(tratan objetos e información recibida del navegador) 
Normalmente no vamos a tener que poner los middleware pq directamente los cogemos de otro lado
en este caso vamos a utilizar morgan*/

//Esto muestra por consola las peticiones que llegan al servidor
app.use(morgan('dev')); //No recibe req y res, los tiene por defecto. El recibe una configuración.
app.use(morgan('short'));//Otra configuración recibida y muestra otra salida
app.use(morgan('combined')); //Otra petición más completa

app.use(function(req, res, next/*Para que continúe el flujo hay que ponerle next, sino se queda cargando */){
    console.log('request url: ' + req.url);
    next();
});
//Para que sepamos que entra en esta función
app.use((req, res, next) =>{
    console.log('Ha pasado por esta función');
    next();
});

//RUTAS
//Aquí irían las rutas, pero las hemos pasado al archivo rutas para que quede más ordenado
//Las pasamos a través de un middleware porque es un objeto, el cual hemos requerido arriba
app.use(routes);
app.use('/api', routesApi);
//Cuando no encontramos ningun archivo
app.get('*'/*para todas las rutas*/, (req, res) => {
    {
         res.end("Archivo no encontrado");
    }
}); 

//Así creamos el servidor 
app.listen(3000, function(){
    console.log("Servidor ON"); 
    console.log("Nombre de la App: ", app.get('app-name'));
});