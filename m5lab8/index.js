const express = require('express')
const productRoutes = require('./routes/productsRoutes');
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');

const app = express()
const port = 3000

app.use('/', express.static('public'))

app.use{
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
};

app.use('/products', productRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})