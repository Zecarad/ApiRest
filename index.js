const express = require('express');
const router = require('./routes/apiRouter');
const { port } =require('./config/env');

const app = express();

app.use(express.json());

app.use('/api', router);

app.listen(port, () => {
    console.log(`Sevidor corriendo en puerto ${port}`)
})