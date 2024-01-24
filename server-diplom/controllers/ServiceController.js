import ServiceService from '../servises/ServiceService.js'

class ServiceController {

    async getAll(req, res) {
        try {
            const service = await ServiceService.getAll();
            return res.json(service);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const service = await ServiceService.getOne(req.params.id);
            return res.json(service);
        } catch (e) {
            res.status(500).send(e.toString())
        }
    }

}

export default new ServiceController();