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

const router = new Router()

// POST
router.post('/posts', PostController.create)
router.get('/posts', PostController.getAll)
router.get('/posts/:id', PostController.getOne)
router.put('/posts', PostController.update)
router.delete('/posts/:id', PostController.delete)

// USER
router.post('/users', UserController.create)
router.get('/users', UserController.getAll)
router.get('/users/:id', UserController.getOne)
router.put('/users', UserController.update)
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
router.delete('/likes/:id', LikeController.delete)

// GENDER
router.get('/genders', GenderController.getAll)
router.get('/genders/:id', GenderController.getOne)

// CITY
router.get('/cities', CityController.getAll)
router.get('/cities/:id', CityController.getOne)

// ACTIVITIES
router.get('/activities', ActivitiesController.getAll)
router.get('/activities/:id', ActivitiesController.getOne)

export default router;