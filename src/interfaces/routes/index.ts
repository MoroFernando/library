import { IRoute } from './Route'
import { BookRoutes } from './Book.routes'
import { AuthorRoutes } from './Author.routes'

export const applicationRoutes: IRoute[] = [...BookRoutes, ...AuthorRoutes]
