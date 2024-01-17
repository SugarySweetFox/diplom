import TypeService from '../servises/TypeService.js'

class TypeController {

    async getAll(req, res) {
        try {
            const types = await TypeService.getAll();
            return res.json(types);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const type = await TypeService.getOne(req.params.id);
            return res.json(type);
        } catch (e) {
            res.status(500).send(e.toString())
        }
    }

}

export default new TypeController();