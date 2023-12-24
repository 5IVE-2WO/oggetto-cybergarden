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

    async getOneEvent(req, res) {
        try {
            const id = req.params.id
            const event = await db.query(`SELECT * FROM events WHERE id = $1`, [id])
            res.json(event.rows[0])
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async updateEvent(req, res) {
        try {
            const { id, title, content, timestamp, speaker_id } = req.body
            const event = await db.query(
                `UPDATE events SET title = $1, content = $2, timestamp = $3, speaker_id = $4 WHERE id = $5 RETURNING *`,
                [title, content, timestamp, speaker_id, id]
            )
            res.json(event.rows[0])
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async deleteEvent(req, res) {
        try {
            const id = req.params.id
            const event = await db.query(`DELETE FROM events WHERE id = $1`, [id])
            res.json(event.rows[0])
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

module.exports = new EventController()