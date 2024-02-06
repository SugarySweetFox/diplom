import WorkService from '../servises/WorkService.js'

class WorkController {
    async create(req, res) {
        try {
            const work = await WorkService.create(req.body, req.files.picture)
            res.json(work)

        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const works = await WorkService.getAll();
            return res.json(works);
        } catch (e) {

            res.status(500).json(e)
        }
    }

    async delete(req, res) {
        try {
            const work = await WorkService.delete(req.params.id)
            return res.json(work)
        } catch (e) {
            res.status(500).send(e.toString())
        }
    }
}

export default new WorkController();