import { container } from 'tsyringe'
import { ICopyRepository } from '../../domain/repositories/Copy.repository'
import { CopyMapper } from '../../interfaces/mappers/Copy.mapper'
import { CopyPrismaRepository } from '../repositories/Copy/CopyPrisma.repository'

container.registerSingleton<ICopyRepository>(
  'CopyRepository',
  CopyPrismaRepository,
)

container.registerSingleton<CopyMapper>('CopyMapper', CopyMapper)
