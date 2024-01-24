import { Service } from "../models.js";

class ServiceService {

    async getAll() {
        const service = await Service.findAll();
        return service;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('Id не указан')
        }
        const service = await Service.findByPk(id);
        return service;
    }

}

export default new ServiceService();