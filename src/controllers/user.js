import { db } from "../config/database.js";

export const getUserData = async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];

    try {
        // Check if the token is valid
        const userSession = await db.query('SELECT * FROM sessions WHERE token = $1', [token]);
        if (userSession.rows.length === 0) {
            return res.sendStatus(401); // Invalid token
        }
        const query = 

        res.status(200).send(data_send);
    } catch (error) {
        res.status(500).send(error.message);
    }
};