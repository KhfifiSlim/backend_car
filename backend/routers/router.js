const express = require("express");
const router = express.Router();
const { AllCars, NewCar, UpdateCar, DeleteCar , OneCar, FetchCar } = require('../controllers/carController.js')

router.get('/allcars' , AllCars)
router.get('/fetchcar' , FetchCar)
router.get('/onecar/:id' , OneCar)
router.post('/newcar' , NewCar)
router.put('/updatecar/:id' , UpdateCar)
router.delete('/deletecar/:id' , DeleteCar)

module.exports = router;