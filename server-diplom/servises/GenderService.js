import { Gender } from "../models.js";

class GenderService {

    async getAll() {
        const genders = await Gender.findAll();
        return genders;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('Id не указан')
        }
        const gender = await Gender.findByPk(id);
        return gender;
    }
}

export default new GenderService();