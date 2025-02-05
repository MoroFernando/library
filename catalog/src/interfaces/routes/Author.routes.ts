import { HTTPMethod, IRoute } from './Route'
import { RegisterAuthorController } from '../controllers/RegisterAuthor.controller'
import { SearchAuthorController } from '../controllers/SearchAuthor.controller'

export const AuthorRoutes: IRoute[] = [
  {
    method: HTTPMethod.POST,
    path: '/author',
    controller: new RegisterAuthorController(),
  },
  {
    method: HTTPMethod.GET,
    path: '/author/:searchKey',
    controller: new SearchAuthorController(),
  },
]
