import { Copy as PrismaCopy } from '@prisma/client'
import { Copy } from '../../../domain/entities/Copy.entity'
import { prisma } from '../../database/prisma/client'
import { ICopyRepository } from '../../../domain/repositories/Copy.repository'
import { injectable } from 'tsyringe'

@injectable()
export class CopyPrismaRepository implements ICopyRepository {
  private readonly prisma = prisma

  async add(copy: Copy) {
    const data: PrismaCopy = {
      id: copy.id,
      bookId: copy.bookId,
      isAvailable: copy.isAvailable,
    }

    await this.prisma.copy.create({
      data,
    })
  }

  async getAll() {
    const prismaResult = await this.prisma.copy.findMany()

    const copys = prismaResult.map((i) =>
      Copy.with({
        id: i.id,
        bookId: i.bookId,
        isAvailable: i.isAvailable,
      }),
    )

    return copys
  }
}
