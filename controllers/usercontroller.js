const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const User = sequelize.import('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/signup', (req, res) => {
    User.create({
        username: req.body.username,
        passwordhash: bcrypt.hashSync(req.body.password, 10),
        email: req.body.email,
        image: req.body.image,
        role: "user"
    })
        .then(data => {
            let token = jwt.sign({ id: data.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 })
            res.status(200).json({
                user: data,
                'sessiontoken': token,
                message: 'user created'
            })
        },
            function (err) {
                res.status(500).json(err)
            })
        .catch(err => res.status(500).json({ message: 'something is wrong', error: err }))
})
router.get('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
        .then(function (user) {
            if (user) {
                bcrypt.compare(req.body.password, user.passwordhash, (err, matches) => {
                    if (matches) {
                        let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });
                        res.status(200).json({
                            user: user,
                            'sessionToken': token,
                            message: 'user logged in'
                        })
                    } else {
                        res.status(500).json('password incorrect');
                    }
                })
            } else {
                res.status(500).json('user does not exist')
            }
        },
            function (err) {
                res.status(500).json('something went wrong')
            }
        )

})


module.exports = router;