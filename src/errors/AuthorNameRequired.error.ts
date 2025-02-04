import { ApplicationError } from './ApplicationError'

export class AuthorNameRequiredError extends ApplicationError {
  constructor() {
    super('Author name is required', 400)
  }
}
