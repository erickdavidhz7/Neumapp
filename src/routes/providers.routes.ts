import ProvidersControllers from '../controllers/providers.controllers'
import express from 'express'
import { uuidV4Validator } from '../middlewares'
const router = express.Router()

//---- ACA COMIENZAN LOS ENDPOINT DE USUARIOS ----/

router.get('/', ProvidersControllers.getAllProviders)
router.post('/', ProvidersControllers.createProvider)
router.get('/:id', [uuidV4Validator('id')], ProvidersControllers.getProviderById)
router.patch('/:id',[uuidV4Validator('id')], ProvidersControllers.updateProvider)

//Aca debemos agregar las demas rutas de usuarios

export default router
