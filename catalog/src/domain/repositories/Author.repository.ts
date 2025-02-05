import { Author } from '../entities/Author.entity'

export interface IAuthorRepository {
  getAll(): Promise<Author[]>
  add(author: Author): Promise<void>
  findById(id: string): Promise<Author | null>
  findByName(name: string): Promise<Author | null>
}
