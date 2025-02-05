import { IController } from '../controllers/Controller'

export interface IRoute {
  method: HTTPMethod
  path: string
  controller: IController
}

export const enum HTTPMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
}
