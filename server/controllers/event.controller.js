const db = require('../db')

class EventController {
    async createEvent(req, res) {
        try {
            const { title, content, timestamp, speaker_id } = req.body
            const event = await db.query(
                `INSERT INTO events (title, content, timestamp, speaker_id) values ($1, $2, $3, $4) RETURNING *`,
                [title, content, timestamp, speaker_id]
            )
            res.json(event.rows[0])
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getEvents(req, res) {
        try {
            const events = await db.query(`SELECT * FROM events`)
            res.json(events.rows)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

module.exports = new EventController()