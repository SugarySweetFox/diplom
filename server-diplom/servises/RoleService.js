import { Role}  from "../models.js";

class RoleService {
    async getAll() {
        const roles = await Role.findAll();
        return roles;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('Id не указан')
        }
        const role = await Role.findByPk(id);
        return role;
    }

}

export default new RoleService();