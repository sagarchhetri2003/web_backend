// const express = require('express');
// const Menu = require('../models/Menu');
// const router = express.Router();

// const menuController = require('../controllers/menuControllers')

// const verifyToken = require('../middlewares/verifyToken');
// const verifyAdmin = require('../middlewares/verifyAdmin');


// // get all menu items
// router.get('/', menuController.getAllMenuItems);

// // post a menu item
// router.post('/', verifyToken, verifyAdmin, menuController.postMenuItem);

// // delete a menu item
// router.delete('/:id',verifyToken, verifyAdmin, menuController.deleteMenu);

// // get a single menu item
// router.get('/:id', menuController.singleMenuItem);

// // update a menu item
// router.patch('/:id',verifyToken, verifyAdmin, menuController.updateMenuItem);


// get all menu items

// router.get('/', async (req, res) => {
//     try {
//         const menus = await Menu.find({});
//         res.status(200).json(menus);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// module.exports = router;

// const productController = require("../controllers/productControllers");
// const { verifyUser, verifyAuthorization } = require("../middlewares/authMiddlerware");

// const router = require("express").Router()

// router.post('/', verifyUser, verifyAuthorization, productController.addProduct)

// router.get('/', productController.getProducts)

// router.get('/:sku', productController.getProduct)

// router.put('/:id', verifyUser, verifyAuthorization, productController.updateProduct)

// router.delete('/:id', verifyUser, verifyAuthorization, productController.deleteProduct)
 
// module.exports = router



const propertyController = require("../controllers/propertyControllers");  // Updated to propertyController
const { verifyUser, verifyAuthorization } = require("../middlewares/authMiddlerware");

const router = require("express").Router();

router.post('/add', verifyUser, verifyAuthorization, propertyController.addProperty);  // Updated to addProperty

router.get('/all', propertyController.getProperties);  // Updated to getProperties

router.get('/:sku', propertyController.getProperty);  // Updated to getProperty

router.put('/:id', verifyUser, verifyAuthorization, propertyController.updateProperty);  // Updated to updateProperty

router.delete('/:id', verifyUser, verifyAuthorization, propertyController.deleteProperty);  // Updated to deleteProperty
 
module.exports = router;
