import GenderService from '../servises/GenderService.js'

class GenderController {

    async getAll(req, res) {
        try {
            const genders = await GenderService.getAll();
            return res.json(genders);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const gender = await GenderService.getOne(req.params.id);
            return res.json(gender);
        } catch (e) {
            res.status(500).send(e.toString())
        }
    }

}

export default new GenderController();