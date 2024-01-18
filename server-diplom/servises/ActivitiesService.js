import { Activities } from "../models.js";

class ActivitiesService {

    async getAll() {
        const activities = await Activities.findAll();
        return activities;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('Id не указан')
        }
        const activities = await Activities.findByPk(id);
        return activities;
    }

}

export default new ActivitiesService();