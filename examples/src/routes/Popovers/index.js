// @flow
import * as React from 'react'

import '../../App.css'

import {
  Button,
  Card,
  Popover,
} from 'react-material'

const targetValue = (e) => e.currentTarget.value

class App extends React.Component {

  state = {
    open: false,
    anchorOriginVertical: 'top',
    anchorOriginHorizontal: 'left',
    targetOriginVertical: 'top',
    targetOriginHorizontal: 'left',
  }

  anchor = null

  togglePopover = () => this.setState({ open: !this.state.open })

  setAnchor = (anchor) => {
    console.log(anchor);
    this.anchor = anchor
  }

  handleChange = (key) => (e) => {
    this.setState({
      open: false,
      [key]: e.currentTarget.value,
    })
  }

  handleNumberInputChange = (key) => (e) => {
    this.setState({
      [key]: +e.currentTarget.value
    })
  }

  render() {
    return (
      <Card className='Card Card--center'>
        <Button getRef={this.setAnchor} onClick={this.togglePopover}>
          Open Popover
        </Button>
        <Popover
          anchorEl={this.anchor}
          anchorOrigin={{
            horizontal: this.state.anchorOriginHorizontal,
            vertical: this.state.anchorOriginVertical,
          }}
          open={this.state.open}
          targetOrigin={{
            horizontal: this.state.targetOriginHorizontal,
            vertical: this.state.targetOriginVertical,
          }}
          onRequestClose={this.togglePopover}
          >
          <span>
            I'm a Popover!
          </span>
        </Popover>
        <div>
          <p>Anchor</p>
          <fieldset>
            <p>Vertical</p>
            <span>
              <span>Top</span>
              <input type='radio' value='top' checked={this.state.anchorOriginVertical === 'top'} onChange={this.handleChange('anchorOriginVertical')}/>
            </span>
            <span>
              <span>Center</span>
              <input type='radio' value='center' checked={this.state.anchorOriginVertical === 'center'} onChange={this.handleChange('anchorOriginVertical')}/>
            </span>
            <span>
              <span>Bottom</span>
              <input type='radio' value='bottom' checked={this.state.anchorOriginVertical === 'bottom'} onChange={this.handleChange('anchorOriginVertical')}/>
            </span>
            </fieldset>
          <fieldset>
            <p>Horizontal</p>
            <span>
              <span>Left</span>
              <input type='radio' value='left' checked={this.state.anchorOriginHorizontal === 'left'} onChange={this.handleChange('anchorOriginHorizontal')}/>
            </span>
            <span>
              <span>Center</span>
              <input type='radio' value='center' checked={this.state.anchorOriginHorizontal === 'center'} onChange={this.handleChange('anchorOriginHorizontal')}/>
            </span>
            <span>
              <span>Right</span>
              <input type='radio' value='right' checked={this.state.anchorOriginHorizontal === 'right'} onChange={this.handleChange('anchorOriginHorizontal')}/>
            </span>
          </fieldset>
        </div>
        <div>
          <p>Target</p>
          <fieldset>
            <p>Vertical</p>
            <span>
              <span>Top</span>
              <input type='radio' value='top' checked={this.state.targetOriginVertical === 'top'} onChange={this.handleChange('targetOriginVertical')}/>
            </span>
            <span>
              <span>Center</span>
              <input type='radio' value='center' checked={this.state.targetOriginVertical === 'center'} onChange={this.handleChange('targetOriginVertical')}/>
            </span>
            <span>
              <span>Bottom</span>
              <input type='radio' value='bottom' checked={this.state.targetOriginVertical === 'bottom'} onChange={this.handleChange('targetOriginVertical')}/>
            </span>
          </fieldset>
          <fieldset>
            <p>Horizontal</p>
            <span>
              <span>Left</span>
              <input type='radio' value='left' checked={this.state.targetOriginHorizontal === 'left'} onChange={this.handleChange('targetOriginHorizontal')}/>
            </span>
            <span>
              <span>Center</span>
              <input type='radio' value='center' checked={this.state.targetOriginHorizontal === 'center'} onChange={this.handleChange('targetOriginHorizontal')}/>
            </span>
            <span>
              <span>Right</span>
              <input type='radio' value='right' checked={this.state.targetOriginHorizontal === 'right'} onChange={this.handleChange('targetOriginHorizontal')}/>
            </span>
          </fieldset>
        </div>
      </Card>
    )
  }
}

export default App
