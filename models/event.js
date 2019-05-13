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
        date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        keyword: {
            type: DataTypes.ENUM,
            values: ['running', 'gym','crossfit', 'kick boxing', 'yoga','basketball','football','soccer','golf','tennis','hiking','rock climbing', 'cycling','mountain biking','kayaking']
        }
    })
    return Event;
}