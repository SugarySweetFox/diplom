import ActivitiesService from '../servises/ActivitiesService.js'

class ActivitiesController {

    async getAll(req, res) {
        try {
            const activities = await ActivitiesService.getAll();
            return res.json(activities);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const activities = await ActivitiesService.getOne(req.params.id);
            return res.json(activities);
        } catch (e) {
            res.status(500).send(e.toString())
        }
    }

}

export default new ActivitiesController();