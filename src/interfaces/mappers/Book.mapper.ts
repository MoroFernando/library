import { Mapper } from './Mapper'
import { Book } from '../../domain/entities/Book.entity'
import { IBookDTO } from '../../application/dtos/Book.dto'
import { Category } from '../../domain/value-objects/Category.vo'

export class BookMapper extends Mapper<Book, IBookDTO> {
  toDomain(dto: IBookDTO): Book {
    return Book.with({
      id: dto.id,
      title: dto.title,
      authorId: dto.authorId,
      category: dto.category
        ? Category.with({ name: dto.category })
        : undefined,
      pagesNumber: dto.pagesNumber ?? undefined,
    })
  }

  toDTO(domain: Book): IBookDTO {
    return {
      id: domain.id,
      title: domain.title,
      authorId: domain.authorId,
      category: domain.category?.name ?? null,
      pagesNumber: domain.pagesNumber ?? null,
    }
  }
}
