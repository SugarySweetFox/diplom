
import { Post, User, City, Type, Service } from "../models.js";
import fileServise from "./fileServise.js";

class PostService {
    async create(post) {
        // const fileName = await fileServise.saveFile(picture);
        const cteatedPost = await Post.create({...post})
        
        return cteatedPost;
    }

    async getAll() {
        const posts = await Post.findAll({ include: { all: true } });
        return posts;
    }

    async getAllModels() {
        const posts = await Post.findAll({ include: { all: true }, where: {

            activities_id: 1

        } });
        return posts;
    }

    async getAllById(id) {
        const posts = await Post.findAll({ include: { all: true }, where: {
            user_id: id
        } });
        return posts;
    }

    async getAllPhotografs() {
        const posts = await Post.findAll({ include: { all: true }, where: {

            activities_id: 2

        } });
        return posts;
    }


    async getAllBeautyMasters() {
        const posts = await Post.findAll({ include: { all: true }, where: {

            activities_id: 3

        } });
        return posts;
    }
    
    async getOne(id) {
        if (!id) {
            throw new Error('Id не указан')
        }
        const post = await Post.findByPk(id);
        return post;
    }

    async update(post) {
        if (!post.id) {
            res.status(400).json({message: 'Id не указан'})
            return
        }
        const updatedPost = await Post.update({about_me: post.about_me, picture: post.picture}, {
            where: {
                id: post.id,
            }
        })
        return updatedPost;
    }

    async delete(id) {
            if (!id) {
                res.status(400).json({message: 'Id не указан'})
            }
            const post = await Post.destroy({
                where: {
                    id: id
                }
            })
            return post;
    }
}

export default new PostService();