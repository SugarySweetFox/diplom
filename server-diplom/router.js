import Router from 'express'
import PostController from './controllers/PostController.js'
import UserController from './controllers/UserController.js'
import WorkController from './controllers/WorkController.js'
import TypeController from './controllers/TypeController.js'
import RoleController from './controllers/RoleController.js'
import LikeController from './controllers/LikeController.js'
import GenderController from './controllers/GenderController.js'
import CityController from './controllers/CityController.js'
import ActivitiesController from './controllers/ActivitiesController.js'
import SearchController from './controllers/SearchController.js'
import ServiceController from './controllers/ServiceController.js'


const router = new Router()

// POST
router.post('/posts', PostController.create)
router.get('/posts', PostController.getAll)
router.get('/models', PostController.getAllModels)
router.get('/photografs', PostController.getAllPhotografs)
router.get('/beautymasters', PostController.getAllBeautyMasters)
router.get('/post/:id', PostController.getOne)
router.get('/posts/:id', PostController.getAllById)
router.put('/posts', PostController.update)
router.delete('/posts/:id', PostController.delete)

// USER
router.post('/users', UserController.create)
router.get('/users', UserController.getAll)
router.get('/users/:id', UserController.getOne)
router.put('/users/:id', UserController.update)
router.delete('/users/:id', UserController.delete)

// WORK
router.post('/works', WorkController.create)
router.get('/works', WorkController.getAll)
router.delete('/works/:id', WorkController.delete)

// TYPE
router.get('/types', TypeController.getAll)
router.get('/types/:id', TypeController.getOne)

// ROLE
router.get('/roles', RoleController.getAll)
router.get('/roles/:id', RoleController.getOne)

// LIKE
router.post('/likes', LikeController.create)
router.get('/likes', LikeController.getAll)
router.get('/likes/:id', LikeController.getAllById)
router.post('/dislikes', LikeController.delete)

// GENDER
router.get('/genders', GenderController.getAll)
router.get('/genders/:id', GenderController.getOne)

// CITY
router.get('/cities', CityController.getAll)
router.get('/cities/:id', CityController.getOne)

// ACTIVITIES
router.get('/activities', ActivitiesController.getAll)
router.get('/activities/:id', ActivitiesController.getOne)

// Search
router.get('/searches', SearchController.getAll)
router.get('/searches/:id', SearchController.getOne)

// Service
router.get('/services', ServiceController.getAll)
router.get('/services/:id', ServiceController.getOne)

// // // PORTFOLIO
// router.post('/portfolio', PortfolioController.create)
// router.get('/portfolio', PortfolioController.getAll)
// router.put('/portfolio', PortfolioController.update)
// router.delete('/portfolio/:id', PortfolioController.delete)

export default router;