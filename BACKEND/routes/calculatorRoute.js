const express = require('express');
const calculatorController = require('../controllers/calculatorController')
const router = express.Router();
router.get('/add', (req, res) => {
    calculatorController.addNumbers(req,res)
})
module.exports = router;


router.get('/divide', (req, res) => {
    calculatorController.divideNumbers(req, res)
})

router.get('/multiply', (req, res) => {
    calculatorController.multiplyNumber(req, res)
})