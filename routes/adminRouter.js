
const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController')

router.get('/', auth, (req, res)=>{

    if (req.user.admin){

        res.send('esse dado so pode ser visto por um Admin')
    }else{
        res.status(401).send('Acesso Negado, você não é um admin');
    }


})
module.exports = router;