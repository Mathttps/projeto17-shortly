import jwt from "jsonwebtoken";

export const checkToken = (req, res, next) => {
    const authHeader = req.headers['authorization']; 
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.sendStatus(401);
    }

    try {
        const secret = 'abc987';
        jwt.verify(token, secret);
        next();
    } catch (err) {
        res.sendStatus(401);
    }
};