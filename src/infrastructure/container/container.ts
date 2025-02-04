import { container } from 'tsyringe'
import { IBookRepository } from '../../domain/repositories/Book.repository'
import { BookPrismaRepository } from '../repositories/Books/BookPrisma.repository'
import { IAuthorRepository } from '../../domain/repositories/Author.repository'
import { AuthorPrismaRepository } from '../repositories/Authors/AuthorPrisma.repository'
import { BookMapper } from '../../interfaces/mappers/Book.mapper'
import { AuthorMapper } from '../../interfaces/mappers/Author.mapper'

container.registerSingleton<IBookRepository>(
  'BookRepository',
  BookPrismaRepository,
)

container.registerSingleton<IAuthorRepository>(
  'AuthorRepository',
  AuthorPrismaRepository,
)

container.registerSingleton<BookMapper>('BookMapper', BookMapper)

container.registerSingleton<AuthorMapper>('AuthorMapper', AuthorMapper)
