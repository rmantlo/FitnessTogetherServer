const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const Event = sequelize.import('../models/event');

router.get('/', (req, res) => {
    Event.findAll()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json(err))
})

router.post('/createevent', (req, res) => {
    Event.create({
        title: req.body.title,
        location: req.body.location,
        description: req.body.description,
        userId: req.user.id
    })
        .then(data => res.status(200).json({ data: data, message: 'created' }))
        .catch(err => res.status(500).json(err))
})

router.put('/update/:id', (req, res) => {
    Event.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(data => res.status(200).json({ data: data, message: 'updated' }))
        .catch(err => res.status(500).json(err))
})

router.delete('/delete/:id', (req, res) => {
    Event.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(data => res.status(200).json({ data: data, message: 'deleted' }))
        .catch(err => res.status(500).json(err))
})

module.exports = router;