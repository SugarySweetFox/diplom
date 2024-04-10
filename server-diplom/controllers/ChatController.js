import ChatServise from "../servises/ChatServise.js";

class ChatController {
    async create(req, res) {
        try {
            const chat = await ChatServise.create(req.body);
            res.json(chat)

        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            console.log('gfvyksrdgfviysgvfigf');
            const chat = await ChatServise.getAll();
            return res.json(chat);
        } catch (e) {
            console.log(e);
            res.status(500).json(e)
        }
    }

    async getAllById(req, res) {
        try {
            const chats = await ChatServise.getAllById(req.params.id);
            // let newArr = [];
            // chats.forEach(chat => {
            //     newArr.push(like.post_id)
            // });
            return res.json(chats);
        } catch (e) {
            console.log(e);
            res.status(500).json(e)
        }
    }

    async getAllChats(req, res) {
        try {
            console.log('gfvyksrdgfviysgvfigf');
            const chat = await ChatServise.getAllChats(req.params.id);
            return res.json(chat);
        } catch (e) {
            console.log(e);
            res.status(500).json(e)
        }
    }

}

export default new ChatController();