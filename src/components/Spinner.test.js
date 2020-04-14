import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';

import Spinner from './Spinner';

const defaultProps = {
  message: 'Loading...'
}

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Spinner { ...setupProps } />)
}

it('does not throw warning with expected props', () => {
  checkProps(Spinner, defaultProps)
})

describe("if the user hasn't accepted the location request", () => {
  let wrapper
  beforeEach(() => {
    wrapper = setup({ message: "Please accept location request"})
  })

  it('renders component without error', () => {
    const component = findByTestAttr(wrapper, 'component-spinner')
    expect(component.length).toBe(1)
  })

  it('renders spinner message', () => {
    const message = findByTestAttr(wrapper, 'spinner-message')
    expect(message.text().length).not.toBe(0)
  })
})
