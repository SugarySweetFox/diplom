import { User } from "../models.js";
import { Role}  from "../models.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {validationResult} from 'express-validator'
import secret from '../config.js'

const generateAccessToken = (id, login) => {
    const payload = {
        id,
        login
    }
    return jwt.sign(payload, secret.secret, {expiresIn: '24h'})
}

class authController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: 'Ошибка при реистрации', errors})
            }
            const {name, login, password, birthday, photo, genderId, cityId, activityId} = req.body
            const candidate = await User.findOne({
                where: {
                 login: login
                }});
            console.log('candidate=', candidate);
            if (candidate) {
                return res.status(400).json({message: 'Пользователь с таким именем уже есть'})
            }
            const hashPassword = bcrypt.hashSync(password, 7);
           
            const user =  User.create({name, login, password: hashPassword, birthday, photo, genderId, cityId, activityId})
            return res.json({message: 'Пользователь успешно зарегистрирован'})
        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'registration error'})
        }
    }

    async login(req, res) {
        try {
            const {login, password} = req.body
            const user = await User.findOne({
                where: {
                 login: login
                }});
            if (!user) {
                return res.status(400).json({message: 'Пользователь не найден'})
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                return res.status(400).json({message: 'Неверный пароль'})
            }
            const token = generateAccessToken(user.id, user.login);

            return res.json({token})
        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'login error'})
        }
    }

    async getUsers(req, res) {
        try {
            const users = await User.findAll()
            res.json(users)
        } catch (e) {
            console.log(e);
        }
    }
}

export default new authController();