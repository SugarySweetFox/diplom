import { User } from "../models.js";
import fileServise from "./fileServise.js";

class UserService {
    async create(user, picture) {
        const fileName = await fileServise.saveFile(picture);
        const cteatedUser = await User.create({...user, photo: fileName})
        
        return cteatedUser;
    }

    async getAll() {
        const users = await User.findAll({ include: { all: true } });
        return users;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('Id не указан')
        }
        const user = await User.findByPk(id, { include: { all: true } });
        return user;
    }

    async update(user, picture, id, res) {
        if (picture) {const fileName = await fileServise.saveFile(picture);}
        if (!id) {
            res.status(400).json({message: 'Id не указан'})
            return
        }
        try {
            console.log('no picture');
            const updatedUser = await User.update(picture ? {name: user.name, login: user.login, password: user.password, birthday: user.birthday, photo: fileName, activities_id: +user.activities_id, city_id: +user.city_id, gender_id: +user.gender_id}: {name: user.name, login: user.login, password: user.password, birthday: user.birthday, activities_id: +user.activities_id, city_id: +user.city_id, gender_id: +user.gender_id}, {
                where: {
                    id: id,
                }
            })
            return updatedUser;
        } catch (e) {
            console.log(e);
        }
    }

    async delete(id) {
            if (!id) {
                res.status(400).json({message: 'Id не указан'})
            }
            const user = await User.destroy({
                where: {
                    id: id
                }
            })
            return user;
    }
}

export default new UserService();