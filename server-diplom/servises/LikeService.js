import Like from "../models.js";


class LikeService {
    async create(like) {
        const cteatedLike = await Like.create({like})
        
        return cteatedLike;
    }

    async getAll() {
        const likes = await Like.findAll();
        return likes;
    }

    async delete(id) {
            if (!id) {
                res.status(400).json({message: 'Id не указан'})
            }
            const like = await Like.destroy({
                where: {
                    id: id
                }
            })
            return like;
    }
}

export default new LikeService();