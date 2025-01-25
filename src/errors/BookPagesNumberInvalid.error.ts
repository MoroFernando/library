import { ApplicationError } from './ApplicationError'

export class BookPagesNumberInvalid extends ApplicationError {
  constructor() {
    super('Book pages number is invalid', 400)
  }
}
