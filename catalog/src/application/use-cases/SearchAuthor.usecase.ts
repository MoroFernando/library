import { inject, injectable } from 'tsyringe'
import { IAuthorRepository } from '../../domain/repositories/Author.repository'
import { AuthorMapper } from '../../interfaces/mappers/Author.mapper'
import { IAuthorDTO } from '../dtos/Author.dto'
import { IUseCase } from './UseCase'

type Input = {
  name: string
}

@injectable()
export class SearchAuthorUseCase implements IUseCase<Input, IAuthorDTO | null> {
  constructor(
    @inject('AuthorRepository') private authorRepository: IAuthorRepository,
    @inject('AuthorMapper') private authorMapper: AuthorMapper,
  ) {}

  async execute(input: Input) {
    const { name } = input

    const author = await this.authorRepository.findByName(name)

    const output = author ? await this.authorMapper.toDTO(author) : null

    return output
  }
}
