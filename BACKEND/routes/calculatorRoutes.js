//Slide 32 EXAMPLE
// const express = require('express')
// const router = express.Router()

// router.get('/add', (req,res) => {
//     res.send('Add')
// })

// module.exports = router

// Slide 33 Example
// const express = require('express')
// const router = express.Router()

// router.get('/add', (req,res) => {
//     console.log(req.query)
//     res.send(req.query)
// })

// module.exports = router

// Slide 34 Example
const express = require('express')
const router = express.Router()

router.get('/add', (req,res) => {
    let number1 = parseInt(req.query.num1)
    let number2 = parseInt(req.query.num2)
    let sum = number1 + number2
    console.log(sum)
    res.status(200)
    res.json({result:sum})
})

module.exports = router