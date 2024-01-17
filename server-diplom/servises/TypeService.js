import Type from "../models.js";

class TypeService {
    async getAll() {
        const types = await Type.findAll();
        return types;
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