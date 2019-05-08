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

router.put('/update', (req, res) => {
    User.update(req.body, { where: { id: req.user.id } })
        .then(data => res.status(200).json({ update: data, message: 'information updated' }))
        .catch(err => res.status(500).json(err))
})

router.delete('/delete', (req, res) => {
    User.destroy({ where: { id: req.user.id } })
        .then(data => res.status(200).json({ message: 'user deleted', data: data }))
        .catch(err => res.status(500).json(err))
})

module.exports = router;