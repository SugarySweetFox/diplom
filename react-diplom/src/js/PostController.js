import Post from './Post.js'

class PostController {
    async create(req, res) {
        try {
            const {author, title, content, picture} = req.body
            const post = await Post.create({author, title, content, picture})
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await Post.findAll();
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params
            if (!id) {
                res.status(400).json({message: 'Id не указан'})
                return
            }
            const post = await Post.findByPk(id);
            return res.json(post);
        } catch (e) {
            res.status(500).send(e.toString())
        }
    }

    async update(req, res) {
        try {
            const post = req.body
            if (!post.id) {
                res.status(400).json({message: 'Id не указан'})
                return
            }
            const updatedPost = await Post.update({author: post.author, title: post.title, content: post.content, picture: post.picture}, {
                where: {
                    id: post.id,
                }
            })
            return res.json(updatedPost);
        } catch (e) {
            res.status(500).send(e.toString())
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            if (!id) {
                res.status(400).json({message: 'Id не указан'})
                return
            }
            const post = await Post.destroy({
                where: {
                    id: post.id
                }
            })
            return res.json(post)
        } catch (e) {
            res.status(500).send(e.toString())
        }
    }
}

export default new PostController();