import { Router } from 'express'
import { expressRoutesAdapter } from '../adapters/route.express'
import { applicationRoutes } from '../../../../interfaces/routes'

export const router = Router()

expressRoutesAdapter(router, applicationRoutes)
