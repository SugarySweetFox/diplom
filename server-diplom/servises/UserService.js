import User from "../models.js";
import fileServise from "./fileServise.js";

class UserService {
    async create(user, picture) {
        const fileName = await fileServise.saveFile(picture);
        const cteatedUser = await User.create({...user, picture: fileName})
        
        return cteatedUser;
    }

    async getAll() {
        const users = await User.findAll();
        return users;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('Id не указан')
        }
        const user = await User.findByPk(id);
        return user;
    }

    async update(user) {
        if (!user.id) {
            res.status(400).json({message: 'Id не указан'})
            return
        }
        const updatedUser = await User.update({author: user.author, title: user.title, content: user.content, picture: user.picture}, {
            where: {
                id: user.id,
            }
        })
        return updatedUser;
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