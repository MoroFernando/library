import { AuthorNameRequiredError } from '../../errors/AuthorNameRequired.error'

type AuthorProps = {
  id: string
  name: string
}

export class Author {
  private constructor(private props: AuthorProps) {
    this.validate()
  }

  static create(props: Omit<AuthorProps, 'id'>) {
    return new Author({
      id: crypto.randomUUID().toString(),
      name: props.name,
    })
  }

  static with(props: AuthorProps) {
    return new Author(props)
  }

  validate() {
    if (!this.props.name) {
      throw new AuthorNameRequiredError()
    }
  }

  get name() {
    return this.props.name
  }
}
