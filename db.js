const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
})

sequelize.authenticate().then(
    function () {
        console.log('connected to db')
    },
    function (err) {
        console.log(err)
    }
)



User = sequelize.import('./models/user');
Event = sequelize.import('./models/event');

Event.belongsTo(User);
User.hasMany(Event);

module.exports = sequelize;