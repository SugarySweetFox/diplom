import Router from 'express'
import AuthController from './controllers/AuthController.js'
import {check} from 'express-validator'

const router = new Router()

router.post('/registration', [
    check('login', 'Имя пользователя не может быть пустым').notEmpty(),
    check('password', 'Пароль должен состоять из 8 символов').isLength({min:8, max:8})
], AuthController.registration)
router.post('/login', AuthController.login)
router.get('/users', AuthController.getUsers)

export default router;