import express from 'express'
import { createUnidadSalud_Controller } from '../unidadsalud_dependencies'
import { readAllUnidadSalud_Controller } from '../unidadsalud_dependencies'
import { deleteUnidadSalud_Controller } from '../unidadsalud_dependencies'
import { readUnidadSaludById_Controller } from '../unidadsalud_dependencies'
import { updateUnidadSalud_Controller } from '../unidadsalud_dependencies'

export const router = express.Router()
router.post('/unidadSalud', createUnidadSalud_Controller.run.bind(createUnidadSalud_Controller))
router.get('/unidadSalud', readAllUnidadSalud_Controller.run.bind(readAllUnidadSalud_Controller))
router.delete('/unidadSalud', deleteUnidadSalud_Controller.run.bind(deleteUnidadSalud_Controller))
router.get('/unidadSalud/:id', readUnidadSaludById_Controller.run.bind(readUnidadSaludById_Controller))
router.put('/unidadSalud/:id', updateUnidadSalud_Controller.run.bind(updateUnidadSalud_Controller))

export default router