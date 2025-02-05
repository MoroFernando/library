import { ApplicationError } from './ApplicationError'

export class BookTitleInvalidError extends ApplicationError {
  constructor() {
    super('Book title is invalid', 400)
  }
}
