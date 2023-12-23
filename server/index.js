const express = require('express')
const speakerRouter = require('./routes/speaker.routes')
const eventRouter = require('./routes/event.routes')

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use('/api', speakerRouter)
app.use('/api', eventRouter)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))