import { IResponse } from '../controllers/Controller'
import { ApplicationError } from '../errors/ApplicationError'

export function handleError(error: unknown): IResponse {
  if (error instanceof ApplicationError) {
    return {
      statusCode: error.statusCode,
      body: {
        message: error.message,
      },
    }
  }

  return {
    statusCode: 500,
    body: {
      message: 'Internal Server Error',
    },
  }
}
