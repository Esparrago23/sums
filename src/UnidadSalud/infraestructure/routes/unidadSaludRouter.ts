import express from 'express'
import { createUnidadSalud_Controller } from '../unidadsalud_dependencies'
import { readAllUnidadSalud_Controller } from '../unidadsalud_dependencies'
import { deleteUnidadSalud_Controller } from '../unidadsalud_dependencies'
import { readUnidadSaludById_Controller } from '../unidadsalud_dependencies'
import { updateUnidadSalud_Controller } from '../unidadsalud_dependencies'

export const UnidadSaludRouter = express.Router()
UnidadSaludRouter.post('/unidadSalud', createUnidadSalud_Controller.run.bind(createUnidadSalud_Controller))
UnidadSaludRouter.get('/unidadSalud', readAllUnidadSalud_Controller.run.bind(readAllUnidadSalud_Controller))
UnidadSaludRouter.delete('/unidadSalud', deleteUnidadSalud_Controller.run.bind(deleteUnidadSalud_Controller))
UnidadSaludRouter.get('/unidadSalud/:id', readUnidadSaludById_Controller.run.bind(readUnidadSaludById_Controller))
UnidadSaludRouter.put('/unidadSalud/:id', updateUnidadSalud_Controller.run.bind(updateUnidadSalud_Controller))

export default UnidadSaludRouter