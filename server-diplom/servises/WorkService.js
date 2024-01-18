import { Work } from "../models.js";
import fileServise from "./fileServise.js";

class WorkService {
    async create(work, picture) {
        const fileName = await fileServise.saveFile(picture);
        const cteatedWork = await Work.create({...work, picture: fileName})
        
        return cteatedWork;
    }

    async getAll() {
        const works = await Work.findAll();
        return works;
    }

    async delete(id) {
            if (!id) {
                res.status(400).json({message: 'Id не указан'})
            }
            const work = await Work.destroy({
                where: {
                    id: id
                }
            })
            return work;
    }
}

export default new WorkService();