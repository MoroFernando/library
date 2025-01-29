import { Request, Response } from 'express'
import {
  IController,
  IRequest,
  IResponse,
} from '../../../interfaces/controllers/Controller'

export function expressAdapter(controller: IController) {
  return async (req: Request, res: Response) => {
    const httpReq: IRequest = {
      body: req.body,
      params: req.params,
      query: req.query as Record<string, string>,
    }

    const httpRes: IResponse = await controller.handle(httpReq)

    res.status(httpRes.statusCode).json(httpRes.body)
  }
}
