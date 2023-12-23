const Router = require('express')
const router = new Router
const speakerController = require('../controllers/speaker.controller')

router.post('/speaker', speakerController.createSpeaker)
router.get('/speaker', speakerController.getSpeakers)
router.get('/speaker/:id', speakerController.getOneSpeaker)
router.put('/speaker', speakerController.updateSpeaker)
router.delete('/speaker/:id', speakerController.deleteSpeaker)

module.exports = router