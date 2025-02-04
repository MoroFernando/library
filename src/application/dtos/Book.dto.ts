import { IAuthorDTO } from './Author.dto'

export interface IBookDTO {
  id: string
  title: string
  author: IAuthorDTO
  category: string | null
  pagesNumber: number | null
}
