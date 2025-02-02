import { HTTPMethod, IRoute } from './Route'
import { ListBooksController } from '../controllers/ListBooks.controller'
import { RegisterBookController } from '../controllers/RegisterBook.controller'

export const BookRoutes: IRoute[] = [
  {
    method: HTTPMethod.GET,
    path: '/books',
    controller: new ListBooksController(),
  },
  {
    method: HTTPMethod.POST,
    path: '/book',
    controller: new RegisterBookController(),
  },
]
