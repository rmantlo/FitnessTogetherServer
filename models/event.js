module.exports = function( sequelize, DataTypes) {
    const Event = sequelize.define('event', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        
        attending: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true
        }
    })
    return Event;
}