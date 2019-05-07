require('dotenv').config();
const express = require('express');
const app = express();
const user = require('./controllers/usercontroller');
const event = require('./controllers/eventcontroller');
const sequelize = require('./db');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
sequelize.sync();
app.use(require('./middleware/headers'));

app.use('/user', user);
app.use(require('./middleware/validate_session'));
app.use('/event', event);

app.listen(process.env.PORT, function () {
    console.log(`listening on ${process.env.PORT}`)
})