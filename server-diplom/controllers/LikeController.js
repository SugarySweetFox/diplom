import LikeService from '../servises/LikeService.js'

class LikeController {
    async create(req, res) {
        try {
            const like = await LikeService.create(req.body)
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