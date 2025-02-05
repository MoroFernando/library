import { ApplicationError } from './ApplicationError'

export class AuthorAlredyExistsError extends ApplicationError {
  constructor() {
    super('Alredy exists an author with this name', 409)
  }
}
