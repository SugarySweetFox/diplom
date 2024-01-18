import { Type } from "../models.js";

class TypeService {
    async getAll() {
       try{ 
            let types =  Type.findAll();
            return types;
        }
       catch(e){
        console.log('error->', e);
       }
    }

    async getOne(id) {
        if (!id) {
            throw new Error('Id не указан')
        }
        const type = await Type.findByPk(id);
        return type;
    }
}

export default new TypeService();