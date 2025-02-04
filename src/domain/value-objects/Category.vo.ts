import { CategoryNameInvalidError } from '../../errors/CategoryNameInvalid.error'
import { CategoryNameRequiredError } from '../../errors/CategoryNameRequired.error'

type CategoryProps = {
  name: string
}

export class Category {
  private constructor(private props: CategoryProps) {}

  static create(props: CategoryProps) {
    return new Category({
      name: props.name,
    })
  }

  static with(props: CategoryProps) {
    return new Category(props)
  }

  validate() {
    if (!this.props.name) {
      throw new CategoryNameRequiredError()
    }

    if (this.props.name.length <= 3) {
      throw new CategoryNameInvalidError()
    }
  }

  get name() {
    return this.props.name
  }
}
