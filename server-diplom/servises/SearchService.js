import { Search } from "../models.js";

class SearchService {

    async getAll() {
        const search = await Search.findAll();
        return search;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('Id не указан')
        }
        const search = await Search.findByPk(id);
        return search;
    }

}

export default new SearchService();