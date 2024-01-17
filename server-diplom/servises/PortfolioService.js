import Portfolio from "../models.js";
import fileServise from "./fileServise.js";

class PortfolioService {
    async create(portfolio, picture) {
        const fileName = await fileServise.saveFile(picture);
        const cteatedPortfolio = await Portfolio.create({...portfolio, picture: fileName})
        
        return cteatedPortfolio;
    }

    async getAll() {
        const portfolio = await Portfolio.findAll();
        return portfolio;
    }

    async update(portfolio) {
        if (!portfolio.id) {
            res.status(400).json({message: 'Id не указан'})
            return
        }
        const updatedPortfolio = await Portfolio.update({}, {
            where: {
                id: portfolio.id,
            }
        })
        return updatedPortfolio;
    }

    async delete(id) {
            if (!id) {
                res.status(400).json({message: 'Id не указан'})
            }
            const portfolio = await Portfolio.destroy({
                where: {
                    id: id
                }
            })
            return portfolio;
    }
}

export default new PortfolioService();