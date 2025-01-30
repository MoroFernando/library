import { ApplicationError } from './ApplicationError'

export class CategoryNameRequiredError extends ApplicationError {
  constructor() {
    super('Category name is required', 400)
  }
}
