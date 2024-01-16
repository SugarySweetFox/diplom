import Post from './Post.js'
import PostService from './PostService.js'

class PostController {
    async create(req, res) {
        try {
            console.log('create ----------> ')
            
            // console.log('req.body ', req.body)
            
            // console.log('req.files > ', req.files.picture)
            const post = await PostService.create(req.body, req.files.picture)
            // res.json(post)
            res.json({});
        } catch (e) {
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
            console.log(updatedPost);
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