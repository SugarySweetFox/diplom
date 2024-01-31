import LikeService from '../servises/LikeService.js'

class LikeController {
    async create(req, res) {
        try {
            const like = await LikeService.create(req.body);
            res.json(like)

        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const likes = await LikeService.getAll();
            return res.json(likes);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAllById(req, res) {
        try {
            const likes = await LikeService.getAllById(req.params.id);
            let newArr = [];
            likes.forEach(like => {
                console.log(like.post.id);
                newArr.push(like.post.id)
            });
            
            return res.json(newArr);
        } catch (e) {
            console.log(e);
            res.status(500).json(e)
        }
    }

    async delete(req, res) {
        try {
            const like = await LikeService.delete(req.params.id)
            return res.json(like)
        } catch (e) {
            res.status(500).send(e.toString())
        }
    }
}

export default new LikeController();