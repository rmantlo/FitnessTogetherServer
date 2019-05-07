module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        passwordhash: {
            type: DataTypes.STRING,
            validate: {
                min: 5
            },
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        image: {
            type: DataTypes.STRING,
        },
        role: {
            type: DataTypes.ENUM,
            values: ['user', 'admin', 'banned'],
            allowNull: false
        }
    })
    return User;
}
