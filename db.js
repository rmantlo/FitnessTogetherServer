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
Attend = sequelize.import('./models/attending');

User.hasMany(Event);
User.hasMany(Attend);
Event.belongsTo(User);
Event.hasMany(Attend);
Attend.belongsTo(Event);
Attend.belongsTo(User);


module.exports = sequelize;