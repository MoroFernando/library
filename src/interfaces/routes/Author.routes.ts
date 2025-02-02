import { HTTPMethod, IRoute } from './Route'
import { RegisterAuthorController } from '../controllers/RegisterAuthor.controller'

export const AuthorRoutes: IRoute[] = [
  {
    method: HTTPMethod.POST,
    path: '/author',
    controller: new RegisterAuthorController(),
  },
]
