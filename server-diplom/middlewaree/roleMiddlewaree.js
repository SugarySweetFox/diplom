import jwt from 'jsonwebtoken'
import secret from '../config.js'

const roleMiddlewaree = function(roleId) {
    return function(req, res, next)
    {
        if (req.methood === 'options') {
            next()
        }
    
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(403).json({message: 'Пользователь не авторизирован'})
            }
            const {roleId: userRoles} = jwt.verify(token, secret)
            let hasRole = false
            userRoles.array.forEach(role => {
                if(roleId.includes(role)) {
                    hasRole = true
                }
            })
            if (!hasRole) {
                return res.status(403).json({message: 'Нет доступа'})
            }
            next()
        } catch (e) {
            console.log(e)
            return res.status(403).json({message: 'Пользователь не авторизирован'})
        }
    }
}

export default roleMiddlewaree;