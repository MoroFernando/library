import { ApplicationError } from './ApplicationError'

export class AuthorNotFoundError extends ApplicationError {
  constructor() {
    super('Author not found', 404)
  }
}
