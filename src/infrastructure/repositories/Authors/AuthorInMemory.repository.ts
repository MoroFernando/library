import { injectable } from 'tsyringe'
import { Author } from '../../../domain/entities/Author.entity'
import { IAuthorRepository } from '../../../domain/repositories/Author.repository'

@injectable()
export class AuthorInMemomryRepository implements IAuthorRepository {
  private readonly authors: Author[] = []

  async getAll() {
    return this.authors
  }

  async add(author: Author) {
    this.authors.push(author)
  }

  async findById(id: string) {
    return this.authors.find((author) => author.id === id) || null
  }

  async findByName(name: string): Promise<Author | null> {
    return this.authors.find((author) => author.name === name) || null
  }
}
