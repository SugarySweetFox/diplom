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
        
        const chatMembers = await ChatMembers.findAll({raw: true, where: {
            userId: id
        }});
        let chatsId = []
        chatMembers.forEach(element => {
            chatsId.push(element.chatId)
        });
        const allchats = await ChatMembers.findAll({raw: true, include: { all: true }})
       
        let chats = [];
       

        allchats.forEach(element => {
            chatsId.forEach(chatid => {
                if (element.chatId === chatid && element.userId != id) {
                    Message.findAll({raw: true, where: {
                        chat_id: chatid
                    }}).then((message) => {
                        let el = element;
                        el.message = message[message.length-1];
                        
                        chats.push(el)
                    })
                }
            })
           
        })
        return chats;
       //TODO доделать через контроллер а то не работает
       
        

    }

    
}

export default new ChatService();