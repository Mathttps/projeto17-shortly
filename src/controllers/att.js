import { db } from "../config/database.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await db.query('SELECT * FROM users WHERE email = $1', [email]);
        if (user.rows.length === 0) {
            return res.sendStatus(401); 
        }

        const checkPassword = await bcrypt.compare(password, user.rows[0].password);
        if (!checkPassword) {
            return res.sendStatus(401); 
        }

        const secret = 'abc987'; 
        const token = jwt.sign({ id: user.rows[0].id }, secret);

        let query;
        if (user.rows[0].token) {
            query = `
      UPDATE sessions
      SET token = $1
      WHERE user_id = $2;
    `;
        } else {
            query = `
      INSERT INTO sessions (token, user_id)
      VALUES ($1, $2);
    `;
        }

        await db.query(query, [token, user.rows[0].id]);

        res.status(200).json({ token }); // Successful login
    } catch (error) {
        res.status(500).send(error.message);
    }
};

