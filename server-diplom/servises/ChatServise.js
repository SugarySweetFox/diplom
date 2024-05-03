import { Chat, ChatMembers, Message, User} from "../models.js";


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
       
        const chatsId = await ChatMembers.findAll({raw: true, where: {
            userId: id
        }})
        
        return chatsId;

    }

    async getAllChatsWithUser(chats) {
        const chatsss = [];
        chats.forEach((chat)=> {
         ChatMembers.findAll({raw: true, where: {
                chatId: chat
            }}).then(chat => {
                chatsss.push(chat)})
        })

      


        

        


        return chatsss;
    }
    
}

export default new ChatService();