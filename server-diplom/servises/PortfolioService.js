import { Portfolio } from "../models.js";

class PortfolioService {
    async create() {
        try{
            const cteatedPortfolio = await Portfolio.create();
            return cteatedPortfolio;
        }
        catch(e){
            console.log('error: ', e)
            return e;
        }
        
        
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