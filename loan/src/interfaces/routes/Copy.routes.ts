import { ListCopiesController } from '../controllers/ListCopies.controller'
import { HTTPMethod, IRoute } from './Route'

export const CopyRoutes: IRoute[] = [
  {
    method: HTTPMethod.GET,
    path: '/copies',
    controller: new ListCopiesController(),
  },
]
