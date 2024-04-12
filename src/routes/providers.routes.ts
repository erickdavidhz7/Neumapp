import ProvidersControllers from '../controllers/providers.controllers'
import express from 'express'
const router = express.Router()

//---- ACA COMIENZAN LOS ENDPOINT DE USUARIOS ----/

router.get('/', ProvidersControllers.getAllProviders)
router.get('/:id', ProvidersControllers.getProviderById)
router.post('/createProvider', ProvidersControllers.createProvider)
router.patch('updateProvider/:id', ProvidersControllers.updateProvider)

//Aca debemos agregar las demas rutas de usuarios

export default router
