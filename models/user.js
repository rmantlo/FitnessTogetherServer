module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
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
            allowNull: true
        },
        admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },
        {
            setterMethods: {
                set(email) {
                    this.setDataValue('email', email.toString().toLowerCase())
                },
                set(username){
                    this.setDataValue('username', username.toString().toLowerCase())
                }
            }
        })
}