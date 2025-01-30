import { ApplicationError } from '../errors/ApplicationError'
import { IResponse } from '../interfaces/controllers/Controller'

export function handleError(error: unknown): IResponse {
  if (error instanceof ApplicationError) {
    return {
      statusCode: error.statusCode,
      data: {
        message: error.message,
      },
    }
  }

  return {
    statusCode: 500,
    data: {
      message: 'Internal Server Error',
    },
  }
}
