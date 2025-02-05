import { Router } from 'express'
import { IRoute } from '../../../../interfaces/routes/Route'
import { expressControllerAdapter } from './controller.express'

export function expressRoutesAdapter(router: Router, routes: IRoute[]) {
  routes.map((route) => {
    const { method, path, controller } = route
    router[method](path, expressControllerAdapter(controller))
  })
}
