import CityService from '../servises/CityService.js'

class GenderController {

    async getAll(req, res) {
        try {
            const cities = await CityService.getAll();
            return res.json(cities);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const city = await CityService.getOne(req.params.id);
            return res.json(city);
        } catch (e) {
            res.status(500).send(e.toString())
        }
    }

}

export default new GenderController();