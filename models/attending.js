module.exports = function (sequelize, DataTypes) {
    const Attending = sequelize.define('attending', {
        eventTitle: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Attending;
}