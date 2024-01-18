import { City } from "../models.js";

class CityService {

    async getAll() {
        const cities = await City.findAll();
        return cities;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('Id не указан')
        }
        const city = await City.findByPk(id);
        return city;
    }

}

export default new CityService();