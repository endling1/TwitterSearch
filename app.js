const express = require('express');
const route = require('./route');
const app = express();

app.use(express.static('public'));
app.use(route);
app.listen(3000, () => console.log('Listening on port 3000'));