module.exports = function (sequelize, DataTypes) {
    const Attending = sequelize.define('attending', {
        eventTitle: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
    return Attending;
}