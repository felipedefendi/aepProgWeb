
import { Router } from 'express'
import healthCheckController from './controller/healthCheckController'
import userController from './controller/userController'
import productController from './controller/productController'

const routes = Router()

routes.post('/products', productController.createProduct)
routes.get('/products', productController.getAllProducts)
routes.get('/products-stock', productController.getStock)
routes.get('/health-check', healthCheckController.check)
routes.get('/users', userController.list)
routes.get('/products-stock-price', productController.getStockPrice)

export default routes