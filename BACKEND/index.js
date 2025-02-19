// Example 1 (Slide 11-13)
// console.log('Hello World!')


// Example 2 (Slide 14-17)
// const express = require('express')
// const app = express()
// const port = 3055

// app.get('/', (req,res) => {
//     res.send('Hello World!')
// })

// app.get('/test', (req,res) => {
//     res.send('This is a test!')
// })

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })


// const express = require('express')

// const app1 = express()
// const port1 = 3060

// `app1.get('/', (req,res) => {
//     res.send('Hello app1')
// })

// const app2 = express()
// const port2 = 3061

// app2.get('/', (req, res) => {
//     res.send('Hello app2')
// })

// app1.listen(port1, () => {
//     console.log(`Example app listening at http://localhost:${port1}`)
// })

// app2.listen(port2, () => {
//     console.log(`Example app listening at http://localhost:${port2}`)
// })

// Example 3 - 24-26
// const testRoutes = require('./routes/myTestRoutes');

// const express = require('express')
// const app = express()
// const port = 3050

// app.use('/', express.static('public'))

// app.use('/myexamples', testRoutes)

// app.get('/users', (req,res) => {
//     res.send('Hello Friends!')
// })

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })


// Example 4 (Slide 32 - )
// const calculatorRoutes = require('/routes/calculatorRoutes')

// const express = require('express')
// const app = express()
// const port = 3000

// // app.use('/', express.static('public'))

// // app.use('/myexamples', testRoutes)

// app.use('calculator', calculatorRoutes)

// // app.get('/users', (req,res) => {
// //     res.send('Hello Friends!')
// // })

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })


// Slide 39 - Dynamic Params Example 
// const calculatorRoutes = require('./routes/calculatorRoutes')

// const userRoutes = require('./routes/userRoutes')

// const express = require('express')
// const app = express()
// const port = 3000

// app.use(express.json())

// app.use('/', express.static('public'))

// //app.use('/myexamples', testRoutes)
// app.use('/calculator', calculatorRoutes)

// app.use('/users', userRoutes)

// //app.get('users', (req, res) => {
//     // res.send('Hello Friends')
// //})

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })


// M5 Lab4
// const friends = [
//     { id: 1, name: 'Phoebe', gender: 'female'},
//     { id: 2, name: 'Joey', gender: 'male'},
//     { id: 3, name: 'Chandler', gender: 'male'},
//     { id: 4, name: 'Monica', gender: 'female'},
//     { id: 5, name: 'Ross', gender: 'male'},
//     { id: 6, name: 'Rachael', gender: 'female'}
// ]

// module.exports = friends;


// M5 Lab5
// const express = require("express");
// const friendRoutes = require('./routes/friendsRoutes')

// const app = express();
// const port = 3000;

// app.use('/', express.static('public'))
// app.use('/friends', friendRoutes);

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })


// M5 - Lab6
// const app = require('./app');
// const port = 3000

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })


// M5 - Lab7

// const express = require('express')
// const calculatorRoutes = require('./routes/calculatorRoutes');

// const app = express()
// const port = 3000

// app.use('/', express.static('public'))

// app.use('/calculator', calculatorRoutes);

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })


const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json')

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

// M5 - Lab8

const express = require('express')
const calculatorRoutes = require('./routes/calculatorRoutes');
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');

const app = express()
const port = 3000

app.use('/', express.static('public'))

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

app.use('/calculator', calculatorRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})