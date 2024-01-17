
import Users from "../models.js";
import fileServise from "./fileServise.js";

class UserService {
    // async create(post, picture) {
    //     const fileName = await fileServise.saveFile(picture);
    //     const cteatedPost = await Post.create({...post, picture: fileName})
        
    //     return cteatedPost;
    // }

    async getAll() {
        const users = await Users.findAll();
        console.log('getall->', users)
        return users;
    }

    // async getOne(id) {
    //     if (!id) {
    //         throw new Error('Id не указан')
    //     }
    //     const post = await Post.findByPk(id);
    //     return post;
    // }

    // async update(post) {
    //     if (!post.id) {
    //         res.status(400).json({message: 'Id не указан'})
    //         return
    //     }
    //     const updatedPost = await Post.update({author: post.author, title: post.title, content: post.content, picture: post.picture}, {
    //         where: {
    //             id: post.id,
    //         }
    //     })
    //     return updatedPost;
    // }

    // async delete(id) {
    //         if (!id) {
    //             res.status(400).json({message: 'Id не указан'})
    //         }
    //         const post = await Post.destroy({
    //             where: {
    //                 id: id
    //             }
    //         })
    //         return post;
    // }
}

export default new UserService();