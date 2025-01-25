import { ApplicationError } from './ApplicationError'

export class BookTitleRequiredError extends ApplicationError {
  constructor() {
    super('Book title is required', 400)
  }
}
