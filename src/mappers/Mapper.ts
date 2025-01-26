export abstract class Mapper<T, R> {
  static toDTO<T, R>(data: T | T[]): R | R[] {
    if (Array.isArray(data)) {
      return data.map((item) => this.mapper(item))
    }
    return this.mapper(data)
  }

  abstract mapper(data: T): R
}
