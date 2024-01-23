import jwt from 'jsonwebtoken'
import secret from '../config.js'

const authMiddlewaree = function(req, res, next) {
    if (req.methood === 'options') {
        next()
    }

    try {
        console.log('secret->', secret);
        const token = req.headers.authorization.split(' ')[1]
        console.log('token ------------>', token)
        if (!token) {
            return res.status(403).json({message: 'Пользователь не авторизирован'})
        }
        const decodedDate = jwt.verify(token, secret.secret)
        console.log('decodedDate->', decodedDate);
        req.user = decodedDate
        next()
    } catch (e) {
        console.log(e)
        return res.status(403).json({message: 'Пользователь не авторизирован'})
    }
}

export default authMiddlewaree;