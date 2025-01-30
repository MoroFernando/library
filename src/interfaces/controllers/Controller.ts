/* eslint-disable @typescript-eslint/no-explicit-any */

export type IRequest = Record<string, any>

export type IResponse = {
  statusCode: number
  data: any
}

export interface IController {
  handle(request?: IRequest): Promise<IResponse>
}
