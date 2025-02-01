import { Mapper } from './Mapper'
import { Author } from '../../domain/entities/Author.entity'
import { IAuthorDTO } from '../../application/dtos/Author.dto'

export class AuthorMapper extends Mapper<Author, IAuthorDTO> {
  toDomain(dto: IAuthorDTO): Author {
    return Author.with({
      id: dto.id,
      name: dto.name,
    })
  }

  toDTO(domain: Author): IAuthorDTO {
    return {
      id: domain.id,
      name: domain.name,
    }
  }
}
