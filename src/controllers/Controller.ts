/* eslint-disable @typescript-eslint/no-explicit-any */

export type IRequest = {
  body?: any
  params?: Record<string, string>
  query?: Record<string, string>
}

export type IResponse = {
  statusCode?: number
  body?: any
}

export interface IController {
  handle(request?: IRequest): Promise<IResponse>
}
