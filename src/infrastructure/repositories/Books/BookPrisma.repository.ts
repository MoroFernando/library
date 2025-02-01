import { Book as PrismaBook } from '@prisma/client'
import { Book } from '../../../domain/entities/Book.entity'
import { prisma } from '../../database/prisma/client'
import { IBookRepository } from '../../../domain/repositories/Book.repository'
import { Category } from '../../../domain/value-objects/Category.vo'

export class BookPrismaRepository implements IBookRepository {
  private readonly prisma = prisma

  async getAll() {
    const prismaResult = await this.prisma.book.findMany()

    const books = prismaResult.map((i) =>
      Book.with({
        id: i.id,
        title: i.title,
        authorId: i.authorId,
        category: i.category ? Category.with({ name: i.category }) : undefined,
        pagesNumber: i.pagesNumber ?? undefined,
      }),
    )

    return books
  }

  async add(book: Book) {
    const data: PrismaBook = {
      id: book.id,
      title: book.title,
      authorId: book.authorId,
      category: book.category?.name ?? null,
      pagesNumber: book.pagesNumber ?? null,
    }

    await this.prisma.book.create({
      data,
    })
  }
}
