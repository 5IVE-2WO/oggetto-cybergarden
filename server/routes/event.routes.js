const Router = require('express')
const router = new Router
const eventController = require('../controllers/event.controller')

router.post('/event', eventController.createEvent)
router.get('/event', eventController.getEvents)
router.get('/event', eventController.getOneEvent)
router.put('/speaker', eventController.updateEvent)
router.delete('/speaker/:id', eventController.deleteEvent)

module.exports = router