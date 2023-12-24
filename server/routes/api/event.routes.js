const Router = require('express')
const router = new Router
const eventController = require('../../controllers/event.controller')

router.post('/', eventController.createEvent)
router.get('/', eventController.getEvents)
router.get('/', eventController.getOneEvent)
router.put('/', eventController.updateEvent)
router.delete('/:id', eventController.deleteEvent)

module.exports = router