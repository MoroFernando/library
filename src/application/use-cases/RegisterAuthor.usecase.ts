import { Author } from '../../domain/entities/Author.entity'
import { IAuthorRepository } from '../../domain/repositories/Author.repository'
import { AuthorMapper } from '../../interfaces/mappers/Author.mapper'
import { IAuthorDTO } from '../dtos/Author.dto'
import { IUseCase } from './UseCase'

type Input = {
  name: string
}

export class RegisterAuthorUseCase implements IUseCase<Input, IAuthorDTO> {
  private readonly authorRepository: IAuthorRepository

  constructor(authorRepository: IAuthorRepository) {
    this.authorRepository = authorRepository
    this.authorRepository = authorRepository
  }

  async execute(input: Input): Promise<IAuthorDTO> {
    const { name } = input

    const author = Author.create({
      name,
    })

    await this.authorRepository.add(author)

    return new AuthorMapper().toDTO(author)
  }
}
