
const  express = require('express'); //Requerimos express 
const router = express.Router();    //Requerimos el modulo de express llamado Router

router.get('/', (req, res)=>{ //Si me piden la ruta inicial('/') pues le responde con un json
    res.json({
        miprimerApi: 'Works'
    });
});

module.exports = router;
