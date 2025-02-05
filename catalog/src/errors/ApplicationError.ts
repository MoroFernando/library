export class ApplicationError extends Error {
  readonly statusCode: number

  constructor(message: string, statusCode?: number) {
    super(message)
    this.name = this.constructor.name
    this.statusCode = statusCode || 400
  }
}
