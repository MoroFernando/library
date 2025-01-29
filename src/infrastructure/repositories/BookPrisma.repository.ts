import { Book as PrismaBook } from '@prisma/client'
import { Book } from '../domain/entities/Book.entity'
import { IBookRepository } from './Book.repository'
import { prisma } from '../infra/database/prisma/client'

export class BookPrismaRepository implements IBookRepository {
  private readonly prisma = prisma

  async getAll() {
    const result = await this.prisma.book.findMany()

    const books = result.map((i) =>
      Book.with({
        id: i.id,
        title: i.title,
        pagesNumber: i.pagesNumber ?? undefined,
      }),
    )

    return books
  }

  async add(book: Book) {
    const data: PrismaBook = {
      id: book.id,
      title: book.title,
      pagesNumber: book.pagesNumber ?? null,
    }

    await this.prisma.book.create({
      data,
    })
  }
}
