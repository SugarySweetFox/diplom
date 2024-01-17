import RoleService from '../servises/RoleService.js'

class RoleController {

    async getAll(req, res) {
        try {
            const roles = await RoleService.getAll();
            return res.json(roles);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const role = await RoleService.getOne(req.params.id);
            return res.json(role);
        } catch (e) {
            res.status(500).send(e.toString())
        }
    }

}

export default new RoleController();