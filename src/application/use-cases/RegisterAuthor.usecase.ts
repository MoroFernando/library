import { inject, injectable } from 'tsyringe'
import { Author } from '../../domain/entities/Author.entity'
import { IAuthorRepository } from '../../domain/repositories/Author.repository'
import { AuthorMapper } from '../../interfaces/mappers/Author.mapper'
import { IAuthorDTO } from '../dtos/Author.dto'
import { IUseCase } from './UseCase'

type Input = {
  name: string
}

@injectable()
export class RegisterAuthorUseCase implements IUseCase<Input, IAuthorDTO> {
  constructor(
    @inject('AuthorRepository') private authorRepository: IAuthorRepository,
    @inject('AuthorMapper') private authorMapper: AuthorMapper,
  ) {}

  async execute(input: Input): Promise<IAuthorDTO> {
    const { name } = input

    const author = Author.create({
      name,
    })

    await this.authorRepository.add(author)

    return await this.authorMapper.toDTO(author)
  }
}
