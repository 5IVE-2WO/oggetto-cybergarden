const express = require('express')
const cors = require('cors')

const userRouter = require('./routes/api/user.routes')
const speakerRouter = require('./routes/api/speaker.routes')
const eventRouter = require('./routes/api/event.routes')

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use(cors())

const apiRouter = express.Router()

apiRouter.use('/users', userRouter)
apiRouter.use('/speakers', speakerRouter)
apiRouter.use('/events', eventRouter)

app.use('/api', apiRouter)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))