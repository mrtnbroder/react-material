
import { Children, PureComponent } from 'react'
import PT from 'prop-types'
import { unstable_renderSubtreeIntoContainer as render, unmountComponentAtNode } from 'react-dom' // eslint-disable-line camelcase

export class Portal extends PureComponent {

  componentDidMount() {
    this.renderToLayer(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.renderToLayer(nextProps)
  }

  componentWillUnmount() {
    this.unrenderFromLayer()
  }

  unrenderFromLayer() {
    if (this.layer) {
      unmountComponentAtNode(this.layer)
      document.body.removeChild(this.layer)
      this.layer = null
    }
  }

  getLayer() {
    return this.layer
  }

  renderToLayer(nextProps) {
    const { open } = nextProps

    if (open) {
      if (!this.layer) {
        this.layer = document.createElement('div')
        document.body.appendChild(this.layer)
      }

      render(this, Children.only(nextProps.children), this.layer)
    } else {
      this.unrenderFromLayer()
    }
  }

  render() {
    return null
  }
}

Portal.propTypes = {
  children: PT.node,
  open: PT.bool,
}
