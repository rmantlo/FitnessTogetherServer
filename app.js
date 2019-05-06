require('dotenv').config();
const express = require('express');
const app = express();
const user = require('./controllers/usercontroller');
//const sequelize = require('./db');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
//sequelize.sync();

app.use('/user', user);
app.use(require('./middleware/validate_session'));

app.listen(process.env.PORT, function(){
    console.log(`listening on ${process.env.PORT}`)
})