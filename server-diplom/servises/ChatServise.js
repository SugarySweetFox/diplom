import { Chat} from "../models.js";


class ChatService {
    async create(first, second) {
        const cteatedChat = await Chat.create();

        
        
        return cteatedChat;
    }

    async getAll() {
        const chats = await Chat.findAll();
        console.log('svghfousrhfgvohrgfv');
        return chats;
    }

    async getAllById(id) {
        const chats = await Chat.findAll({ where: {

            id: id

        }});
        return chats;
    }

    
}

export default new ChatService();