import { ApplicationError } from './ApplicationError'

export class CopyBookIdRequiredError extends ApplicationError {
  constructor() {
    super('Copy book ID is required', 400)
  }
}
