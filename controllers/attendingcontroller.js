const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const Attend = sequelize.import('../models/attending');

router.get('/myattending', (req, res) => {
    Attend.findAll({
        where: {
            userId: req.user.id
        }
    })
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json(err))
})
router.get('/attendingbyevent/:id', (req, res) => {
    Attend.findAll({
        where: {
            eventId: req.params.id
        }
    })
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json(err))
})
router.post('/attend', (req, res) => {
    Attend.create({
        username: req.body.username,
        eventTitle: req.body.eventTitle,
        date: req.body.date,
        userId: req.user.id,
        eventId: req.body.eventId
    })
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json(err))
})

module.exports = router;