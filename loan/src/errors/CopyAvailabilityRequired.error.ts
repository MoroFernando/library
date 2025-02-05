import { ApplicationError } from './ApplicationError'

export class CopyAvailabilityRequiredError extends ApplicationError {
  constructor() {
    super('Copy availability is required', 400)
  }
}
