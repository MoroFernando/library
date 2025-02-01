import { Request, Response } from 'express'
import {
  IController,
  IRequest,
  IResponse,
} from '../../../../interfaces/controllers/Controller'

export function expressControllerAdapter(controller: IController) {
  return async (req: Request, res: Response) => {
    const applicationRequest: IRequest = {
      ...req.body,
      ...req.params,
      ...req.query,
    }

    // params: req.params,
    // query: req.query as Record<string, string>,
    const httpRes: IResponse = await controller.handle(applicationRequest)

    res.status(httpRes.statusCode).json(httpRes.data)
  }
}
