//Importanto Express Router
const router = require('express').Router();
//Importando Controller
const apiController = require('../controllers/api');

//Rota geral
router.get('/', apiController.getPokemons);

router.post('/create', apiController.createPokemons);

router.post('/update', apiController.updatePokemons);

router.post('/delete', apiController.deletePokemons);

module.exports = router;