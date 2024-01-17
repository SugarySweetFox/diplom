import PortfolioService from '../servises/PortfolioService.js'

class PortfolioController {
    async create(req, res) {
        try {
            const portfolio = await PortfolioService.create(req.body, req.files.picture)
            res.json(portfolio)

        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const portfolio = await PortfolioService.getAll();
            return res.json(portfolio);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const updatedPortfolio = await PortfolioService.update(req.body)
            return res.json(updatedPortfolio);
        } catch (e) {
            res.status(500).send(e.toString())
        }
    }

    async delete(req, res) {
        try {
            const portfolio = await PortfolioService.delete(req.params.id)
            return res.json(portfolio)
        } catch (e) {
            res.status(500).send(e.toString())
        }
    }
}

export default new PortfolioController();