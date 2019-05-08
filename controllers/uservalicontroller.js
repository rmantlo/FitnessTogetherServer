const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const User = sequelize.import('../models/user');

router.get('/get', (req, res) => {
    User.findOne({
        where: {
            id: req.user.id
        }
    })
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json(err))
})

module.exports = router;