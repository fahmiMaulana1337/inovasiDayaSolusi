
const express = require('express');

const router = express.Router()
const Controller = require('../controllers/controller');


router.get('/',Controller.getDataProduct);
router.post('/',Controller.addDataProduct);
router.put('/:id',Controller.editDataProduct);
router.get('/:id',Controller.getDataProductById);



module.exports=router;
