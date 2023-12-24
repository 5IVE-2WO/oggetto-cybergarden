const Router = require('express')
const router = new Router
const userController = require('../../controllers/user.controller')

router.post('/', userController.createUser)
router.get('/', userController.getUsers)
router.put('/:id', userController.updateUser)
router.delete('/', userController.deleteUser)

module.exports = router