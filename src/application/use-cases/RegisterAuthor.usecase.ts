import { inject, injectable } from 'tsyringe'
import { Author } from '../../domain/entities/Author.entity'
import { IAuthorRepository } from '../../domain/repositories/Author.repository'
import { AuthorMapper } from '../../interfaces/mappers/Author.mapper'
import { IAuthorDTO } from '../dtos/Author.dto'
import { IUseCase } from './UseCase'
import { AuthorAlredyExistsError } from '../../errors/AuthorAlredyExists.error'

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

    const nameAlredyInUse = await this.authorRepository.findByName(name)

    if (nameAlredyInUse) throw new AuthorAlredyExistsError()

    const author = Author.create({
      name,
    })

    await this.authorRepository.add(author)

    return await this.authorMapper.toDTO(author)
  }
}
