import { Mapper } from './Mapper'
import { Author } from '../../domain/entities/Author.entity'
import { IAuthorDTO } from '../../application/dtos/Author.dto'

export class AuthorMapper extends Mapper<Author, IAuthorDTO> {
  async toDomain(dto: IAuthorDTO): Promise<Author> {
    return Author.with({
      id: dto.id,
      name: dto.name,
    })
  }

  async toDTO(domain: Author): Promise<IAuthorDTO> {
    return {
      id: domain.id,
      name: domain.name,
    }
  }
}
