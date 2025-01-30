/* eslint-disable @typescript-eslint/no-unused-vars */
export abstract class Mapper<Domain, DTO> {
  toDomain(dto: DTO): Domain {
    throw new Error('Method not implemented.')
  }

  toDomains(dtos: DTO[]): Domain[] {
    return dtos.map((dto) => this.toDomain(dto))
  }

  toDTO(domain: Domain): DTO {
    throw new Error('Method not implemented.')
  }

  toDTOs(domains: Domain[]): DTO[] {
    return domains.map((domain) => this.toDTO(domain))
  }
}
