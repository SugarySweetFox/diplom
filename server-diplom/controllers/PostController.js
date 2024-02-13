import LikeService from '../servises/LikeService.js';
import PostService from '../servises/PostService.js'
import preparePosts from '../utils/prepare.js';

class PostController {
    async create(req, res) {
        let post = null;
        try {
            console.log('reqFilesPicture->', req?.files);
            if(req.files ){
                 post = await PostService.create(req.body, req.files.picture)
            } else {
                 post = await PostService.create(req.body)
            }
            res.json(post)
        } catch (e) {
            console.log(e);
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const posts = preparePosts(await PostService.getAll());
            const likes = preparePosts(await LikeService.getAll());
            console.log('likes=>', likes);
            let postsWithLikes = [];
            posts.forEach(post=>{
                let likeArr = [];
                likes.forEach(like=>{
                   
                    if(post.id === like.post_id){
                        likeArr.push(like.user_id)
                    }
                });
                postsWithLikes.push({...post, likes: likeArr});
               
            });
            return res.json(postsWithLikes);
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
            const posts = preparePosts(await PostService.getAllModels());
            const likes = preparePosts(await LikeService.getAll());
            console.log('likes=>', likes);
            let postsWithLikes = [];
            posts.forEach(post=>{
                let likeArr = [];
                likes.forEach(like=>{
                    if(post.id === like.post_id){
                        likeArr.push(like.user_id)
                    }
                });
                postsWithLikes.push({...post, likes: likeArr});
               
            });
            return res.json(postsWithLikes);
        } catch (e) {
            console.log(e);
            res.status(500).json(e)
        }
    }

    async getAllPhotografs(req, res) {
        try {
            const posts = preparePosts(await PostService.getAllPhotografs());
            const likes = preparePosts(await LikeService.getAll());
            console.log('likes=>', likes);
            let postsWithLikes = [];
            posts.forEach(post=>{
                let likeArr = [];
                likes.forEach(like=>{
                   
                    if(post.id === like.post_id){
                        likeArr.push(like.user_id)
                    }
                });
                postsWithLikes.push({...post, likes: likeArr});
               
            });
            return res.json(postsWithLikes);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAllBeautyMasters(req, res) {
        try {
            let posts = preparePosts(await PostService.getAllBeautyMasters());
            const likes = preparePosts(await LikeService.getAll());
            let postsWithLikes = [];
            posts.forEach(post=>{
                let likeArr = [];
                likes.forEach(like=>{
                   
                    if(post.id === like.post_id){
                        likeArr.push(like.user_id)
                    }
                });
                postsWithLikes.push({...post, likes: likeArr});
               
            });
            return res.json(postsWithLikes);
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