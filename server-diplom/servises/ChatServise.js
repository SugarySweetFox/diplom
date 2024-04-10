import { Chat, ChatMembers, User} from "../models.js";


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

    async getAllChats(id) {
        const chatMembers = await ChatMembers.findAll({raw: true, where: {
            userId: id
        }});
        let chatsId = []
        chatMembers.forEach(element => {
            chatsId.push(element.chatId)
        });
        const allchats = await ChatMembers.findAll({raw: true, include: { all: true }})
        let chats = []
        allchats.forEach(element => {
            chatsId.forEach(chatid => {
                if (element.chatId === chatid && element.userId != id) {
                    chats.push(element)
                }
            })
        })
        return chats;
    }

    
}

export default new ChatService();