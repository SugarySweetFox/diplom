import PostService from '../servises/PostService.js'

class PostController {
    async create(req, res) {
        try {
            console.log(req.files.picture);
            const post = await PostService.create(req.body, req.files.picture)
            res.json(post)
        } catch (e) {
            console.log(e);
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll();
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAllById(req, res) {
        try {
            const posts = await PostService.getAllById(req.params.id);
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e)
        }
    }


    async getAllModels(req, res) {
        try {
            const posts = await PostService.getAllModels();
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAllPhotografs(req, res) {
        try {
            const posts = await PostService.getAllPhotografs();
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAllBeautyMasters(req, res) {
        try {
            let posts = JSON.parse(JSON.stringify(await PostService.getAllBeautyMasters()));
            let newArr = posts.map((post) => ({...post, likes: [0]}))
            console.log(newArr);
            return res.json(posts);
        } catch (e) {
            console.log(e);
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const post = await PostService.getOne(req.params.id);
            return res.json(post);
        } catch (e) {
            res.status(500).send(e.toString())
        }
    }

   
    async update(req, res) {
        try {
            const updatedPost = await PostService.update(req.body)
            return res.json(updatedPost);
        } catch (e) {
            res.status(500).send(e.toString())
        }
    }

    async delete(req, res) {
        try {
            const post = await PostService.delete(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).send(e.toString())
        }
    }
}

export default new PostController();