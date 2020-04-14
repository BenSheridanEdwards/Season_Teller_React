import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';

import SeasonDisplay from './SeasonDisplay';

const defaultProps = {
  lat: '10000'
}

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<SeasonDisplay { ...setupProps } />)
}

it('does not throw warning with expected props', () => {
  checkProps(SeasonDisplay, defaultProps)
})

describe("If the user is in the northern hemisphere in June, the season is summer", () => {
  let wrapper
  beforeEach(() => {
    wrapper = setup({ lat: "10000", date: 6 })
  })

  it('renders component without error', () => {
    const component = findByTestAttr(wrapper, 'component-season-display')
    expect(component.length).toBe(1)
  })

  it('renders summer message', () => {
    const message = findByTestAttr(wrapper, 'season-message')
    expect(message.text()).toBe("Let's hit the beach!")
  })
})

describe("If the user is in the southern hemisphere in June, the season is winter", () => {
  let wrapper
  beforeEach(() => {
    wrapper = setup({ lat: "-10000", date: 6 })
  })

  it('renders component without error', () => {
    const component = findByTestAttr(wrapper, 'component-season-display')
    expect(component.length).toBe(1)
  })

  it('renders summer message', () => {
    const message = findByTestAttr(wrapper, 'season-message')
    expect(message.text()).toBe("Burr it's cold!")
  })
})

describe("If the user is in the northern hemisphere in January, the season is winter", () => {
  let wrapper
  beforeEach(() => {
    wrapper = setup({ lat: "10000", date: 1 })
  })

  it('renders component without error', () => {
    const component = findByTestAttr(wrapper, 'component-season-display')
    expect(component.length).toBe(1)
  })

  it('renders summer message', () => {
    const message = findByTestAttr(wrapper, 'season-message')
    expect(message.text()).toBe("Burr it's cold!")
  })
})

describe("If the user is in the southern hemisphere in January, the season is summer", () => {
  let wrapper
  beforeEach(() => {
    wrapper = setup({ lat: "-10000", date: 1 })
  })

  it('renders component without error', () => {
    const component = findByTestAttr(wrapper, 'component-season-display')
    expect(component.length).toBe(1)
  })

  it('renders summer message', () => {
    const message = findByTestAttr(wrapper, 'season-message')
    expect(message.text()).toBe("Let's hit the beach!")
  })
})
