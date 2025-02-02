import { inject, injectable } from 'tsyringe'
import { Mapper } from './Mapper'
import { Book } from '../../domain/entities/Book.entity'
import { IBookDTO } from '../../application/dtos/Book.dto'
import { Category } from '../../domain/value-objects/Category.vo'
import { IAuthorRepository } from '../../domain/repositories/Author.repository'
import { AuthorNotFoundError } from '../../errors/AuthorNotFound.error'
import { AuthorMapper } from './Author.mapper'

@injectable()
export class BookMapper extends Mapper<Book, IBookDTO> {
  constructor(
    @inject('AuthorRepository') private authorRepository: IAuthorRepository,
    @inject('AuthorMapper') private authorMapper: AuthorMapper,
  ) {
    super()
  }

  async toDomain(dto: IBookDTO): Promise<Book> {
    return Book.with({
      id: dto.id,
      title: dto.title,
      authorId: dto.author.id,
      category: dto.category
        ? Category.with({ name: dto.category })
        : undefined,
      pagesNumber: dto.pagesNumber ?? undefined,
    })
  }

  async toDTO(domain: Book): Promise<IBookDTO> {
    const author = await this.authorRepository.findById(domain.authorId)

    if (!author) throw new AuthorNotFoundError()

    const authorDTO = await this.authorMapper.toDTO(author)

    return {
      id: domain.id,
      title: domain.title,
      author: authorDTO,
      category: domain.category?.name ?? null,
      pagesNumber: domain.pagesNumber ?? null,
    }
  }
}
