/* eslint-disable @typescript-eslint/no-unused-vars */
export abstract class Mapper<Domain, DTO> {
  async toDomain(dto: DTO): Promise<Domain> {
    throw new Error('Method not implemented.')
  }

  async toDomains(dtos: DTO[]): Promise<Domain[]> {
    return await Promise.all(dtos.map((dto) => this.toDomain(dto)))
  }

  async toDTO(domain: Domain): Promise<DTO> {
    throw new Error('Method not implemented.')
  }

  async toDTOs(domains: Domain[]): Promise<DTO[]> {
    return await Promise.all(domains.map((domain) => this.toDTO(domain)))
  }
}
