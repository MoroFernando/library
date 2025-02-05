import { injectable } from 'tsyringe'
import { Mapper } from './Mapper'
import { Copy } from '../../domain/entities/Copy.entity'
import { ICopyDTO } from '../../application/dtos/Copy.dto'

@injectable()
export class CopyMapper extends Mapper<Copy, ICopyDTO> {
  constructor() {
    super()
  }

  async toDomain(dto: ICopyDTO): Promise<Copy> {
    return Copy.with({
      id: dto.id,
      bookId: dto.bookId,
      isAvailable: dto.isAvailable,
    })
  }

  async toDTO(domain: Copy): Promise<ICopyDTO> {
    return {
      id: domain.id,
      bookId: domain.bookId,
      isAvailable: domain.isAvailable,
    }
  }
}
