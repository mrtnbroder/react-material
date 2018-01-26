import { PureComponent } from 'react'
import PT from 'prop-types'
import { createPortal } from 'react-dom'

class Portal extends PureComponent {
  constructor(props) {
    super(props)

    this.layer = typeof window === 'undefined'
      ? null
      : document.createElement('div')
  }
  componentDidMount() {
    document.body.appendChild(this.layer)
  }

  componentWillUnmount() {
    document.body.removeChild(this.layer)
  }

  getLayer() {
    return this.layer
  }

  render() {
    return createPortal(
      this.props.open ? this.props.children : null,
      this.layer
    )
  }
}

Portal.propTypes = {
  children: PT.any,
  open: PT.bool,
}

export default Portal
