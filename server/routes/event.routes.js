const Router = require('express')
const router = new Router
const eventController = require('../controllers/event.controller')

router.post('/event', eventController.createEvent)
router.get('/event', eventController.getEvents)

module.exports = router