import UserService from "../servises/UserService.js";


class UserController {
    // async create(req, res) {
    //     try {
    //         const post = await PostService.create(req.body, req.files.picture)
    //         res.json(post)

    //     } catch (e) {
    //         res.status(500).json(e)
    //     }
    // }

    async getAll(req, res) {
        try {
            const users = await UserService.getAll();
            console.log('getall->', users)
            return res.json(users);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    // async getOne(req, res) {
    //     try {
    //         const post = await PostService.getOne(req.params.id);
    //         return res.json(post);
    //     } catch (e) {
    //         res.status(500).send(e.toString())
    //     }
    // }

    // async update(req, res) {
    //     try {
    //         const updatedPost = await PostService.update(req.body)
    //         return res.json(updatedPost);
    //     } catch (e) {
    //         res.status(500).send(e.toString())
    //     }
    // }

    // async delete(req, res) {
    //     try {
    //         const post = await PostService.delete(req.params.id)
    //         return res.json(post)
    //     } catch (e) {
    //         res.status(500).send(e.toString())
    //     }
    // }
}

export default new UserController();