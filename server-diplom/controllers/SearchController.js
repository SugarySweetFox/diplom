import SearchService from '../servises/SearchService.js'

class SearchController {

    async getAll(req, res) {
        try {
            const search = await SearchService.getAll();
            return res.json(search);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const search = await SearchService.getOne(req.params.id);
            return res.json(search);
        } catch (e) {
            res.status(500).send(e.toString())
        }
    }

}

export default new SearchController();