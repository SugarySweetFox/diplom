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
            console.log(e);
            res.status(500).json(e)
        }
    }

    async getAllById(req, res) {
        try {
            const likes = await LikeService.getAllById(req.params.id);
            let newArr = [];
            likes.forEach(like => {
                newArr.push(like.post_id)
            });
            return res.json(newArr);
        } catch (e) {
            console.log(e);
            res.status(500).json(e)
        }
    }

    async delete(req, res) {
        try {
            const like = await LikeService.delete(req.body.post_id, req.body.user_id, res)
            return res.json(like)
        } catch (e) {
            console.log(e);
            res.status(500).send(e.toString())
        }
    }
}

export default new LikeController();