import { Author as PrismaAuthor } from '@prisma/client'
import { Author } from '../../../domain/entities/Author.entity'
import { prisma } from '../../database/prisma/client'
import { IAuthorRepository } from '../../../domain/repositories/Author.repository'

export class AuthorPrismaRepository implements IAuthorRepository {
  private readonly prisma = prisma

  async getAll() {
    const prismaResult = await this.prisma.author.findMany()

    const authors = prismaResult.map((i) =>
      Author.with({
        id: i.id,
        name: i.name,
      }),
    )

    return authors
  }

  async add(author: Author) {
    const data: PrismaAuthor = {
      id: author.id,
      name: author.name,
    }

    await this.prisma.author.create({
      data,
    })
  }

  async findById(id: string) {
    const prismaAuthor = await this.prisma.author.findUnique({
      where: {
        id: id,
      },
    })

    if (!prismaAuthor) return null

    return Author.with({
      id: prismaAuthor.id,
      name: prismaAuthor.name,
    })
  }
}
