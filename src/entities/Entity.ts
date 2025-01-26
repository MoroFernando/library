/* eslint-disable @typescript-eslint/no-explicit-any */
export abstract class Entity<Props> {
  protected constructor(protected props: Props) {
    this.validate()
  }

  validate(): void {
    return
  }

  toJSON() {
    const json: Partial<Props> = {}
    const prototype = Object.getPrototypeOf(this)

    Object.getOwnPropertyNames(prototype).forEach((key) => {
      const descriptor = Object.getOwnPropertyDescriptor(prototype, key)
      if (descriptor && typeof descriptor.get === 'function') {
        const value = (this as any)[key]
        json[key as keyof Props] = value ?? null
      }
    })

    return json
  }
}
