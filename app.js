const express = require('express');

//register routes
const feedRoutes = require('./routes/feed');

const app = express();
//use routes
app.use('/feed', feedRoutes);

app.listen(8080);

