import { injectable } from 'tsyringe'
import { Copy } from '../../../domain/entities/Copy.entity'
import { ICopyRepository } from '../../../domain/repositories/Copy.repository'

@injectable()
export class CopyInMemomryRepository implements ICopyRepository {
  private readonly copys: Copy[] = []

  async add(copy: Copy) {
    this.copys.push(copy)
  }

  async getAll(): Promise<Copy[]> {
    return this.copys
  }
}
