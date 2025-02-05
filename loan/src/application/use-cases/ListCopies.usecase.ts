import { inject, injectable } from 'tsyringe'
import { IUseCase } from './UseCase'
import { CopyMapper } from '../../interfaces/mappers/Copy.mapper'
import { ICopyRepository } from '../../domain/repositories/Copy.repository'
import { ICopyDTO } from '../dtos/Copy.dto'

@injectable()
export class ListCopiesUseCase implements IUseCase<void, ICopyDTO[]> {
  constructor(
    @inject('CopyMapper') private copyMapper: CopyMapper,
    @inject('CopyRepository') private copyRepository: ICopyRepository,
  ) {}

  async execute(): Promise<ICopyDTO[]> {
    const copies = await this.copyRepository.getAll()

    return await this.copyMapper.toDTOs(copies)
  }
}
