const Router = require('express')
const router = new Router
const speakerController = require('../../controllers/speaker.controller')

router.post('/', speakerController.createSpeaker)
router.get('/', speakerController.getSpeakers)
router.get('/:id', speakerController.getOneSpeaker)
router.put('/', speakerController.updateSpeaker)
router.delete('/:id', speakerController.deleteSpeaker)

module.exports = router