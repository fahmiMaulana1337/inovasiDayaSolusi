
const express = require('express');

const router = express.Router()
const Controller = require('../controllers/controller');


router.get('/',Controller.getDataProduct);
router.get('/:id',Controller.getDataProductById);
router.post('/:id',Controller.getDataProductById);



module.exports=router;
