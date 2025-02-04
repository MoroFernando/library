import { ApplicationError } from './ApplicationError'

export class CategoryNameInvalidError extends ApplicationError {
  constructor() {
    super('Category name is invalid', 400)
  }
}
