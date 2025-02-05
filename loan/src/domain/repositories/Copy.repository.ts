import { Copy } from '../entities/Copy.entity'

export interface ICopyRepository {
  add(copy: Copy): Promise<void>
  getAll(): Promise<Copy[]>
}
