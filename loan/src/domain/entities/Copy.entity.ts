import { CopyAvailabilityRequiredError } from '../../errors/CopyAvailabilityRequired.error'
import { CopyBookIdRequiredError } from '../../errors/CopyBookIdRequired.error'

type CopyProps = {
  id: string
  bookId: string
  isAvailable: boolean
}

export class Copy {
  private constructor(private props: CopyProps) {
    this.validate()
  }

  static create(props: Omit<CopyProps, 'id' | 'isAvailable'>) {
    return new Copy({
      id: crypto.randomUUID().toString(),
      bookId: props.bookId,
      isAvailable: true,
    })
  }

  static with(props: CopyProps) {
    return new Copy(props)
  }

  validate() {
    if (!this.props.bookId) {
      throw new CopyBookIdRequiredError()
    }

    if (!this.props.isAvailable) {
      throw new CopyAvailabilityRequiredError()
    }
  }

  get id() {
    return this.props.id
  }

  get bookId() {
    return this.props.bookId
  }

  get isAvailable() {
    return this.props.isAvailable
  }
}
