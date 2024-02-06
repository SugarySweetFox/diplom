import { Like, Post } from "../models.js";


class LikeService {
    async create(like) {
        const cteatedLike = await Like.create({...like})
        
        return cteatedLike;
    }

    async getAll() {
        const likes = await Like.findAll();
        return likes;
    }

    async getAllById(id) {
        const likes = await Like.findAll({ include: Post, where: {

            user_id: id

        } });
        return likes;
    }

    async delete(postId, userId, res) {
            if (!postId || !userId) {
                res.status(400).json({message: 'Id не указан'})
            }
            const like = await Like.destroy({
                where: {
                    post_id: postId,
                    user_id: userId
                }
            })
            return like;
    }
}

export default new LikeService();