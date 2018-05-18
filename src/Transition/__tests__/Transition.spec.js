import * as React from 'react'
import { shallow } from 'enzyme'
import Transition from '../'


describe('<Transition />', () => {
  let component

  beforeEach(() => {
    component = shallow(<Transition />)
  })

  it('has some default props', () => {
    expect(typeof component.instance().props.didFinish).toBe('function')
  })

  // it('doesnt have any children', () => {
  //   expect(component.children().length).toBe(0)
  // })

  // it('has a displayName', () => {
  //   expect(component.instance().name()).toBe('Transition')
  // });

})
