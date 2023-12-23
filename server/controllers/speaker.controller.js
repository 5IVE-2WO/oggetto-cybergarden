const db = require('../db')

class SpeakerController {
    async createSpeaker(req, res) {
        try {
            const { name, specialization } = req.body
            const speaker = await db.query(
                `INSERT INTO speakers (name, specialization) values ($1, $2) RETURNING *`,
                [name, specialization]
            )
            res.json(speaker.rows[0])
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getSpeakers(req, res) {
        try {
            const speakers = await db.query(`SELECT * FROM speakers`)
            res.json(speakers.rows)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOneSpeaker(req, res) {
        try {
            const id = req.params.id
            const speaker = await db.query(`SELECT * FROM speakers WHERE id = $1`, [id])
            res.json(speaker.rows[0])
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async updateSpeaker(req, res) {
        try {
            const { id, name, specialization } = req.body
            const speaker = await db.query(
                `UPDATE speakers SET name = $1, specialization = $2 WHERE id = $3 RETURNING *`,
                [name, specialization, id]
            )
            res.json(speaker.rows[0])
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async deleteSpeaker(req, res) {
        try {
            const id = req.params.id
            const speaker = await db.query(`DELETE FROM speakers WHERE id = $1`, [id])
            res.json(speaker.rows[0])
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

module.exports = new SpeakerController()