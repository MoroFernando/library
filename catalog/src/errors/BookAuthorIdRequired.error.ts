import { ApplicationError } from './ApplicationError'

export class BookAuthorIdRequiredError extends ApplicationError {
  constructor() {
    super('Book author id is required', 400)
  }
}
