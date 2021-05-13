const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 80;

app.use(express.static(path.join(__dirname, 'frontend')));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.get('/', (request, response) => {
    response.sendFile(`${__dirname}/frontend/index.html`);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
});