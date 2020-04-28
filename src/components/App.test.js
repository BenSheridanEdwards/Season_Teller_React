import React from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';

import App from './App';

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for setup
 * @returns {ShallowWrapper}
*/

const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props} />)
  if (state) wrapper.setState(state)
    return wrapper;
}

it('renders without error', () =>{
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

it("renders an error message when the user doesn't share their location", () =>{
  const wrapper = setup({}, {lat: "", errorMessage: 'Denied Location'});
  const errorMessage = findByTestAttr(wrapper, 'error-message');
  expect(errorMessage.text()).toContain("Error: Denied Location");
});

it("renders the Season Display component when the user shares their location", () =>{
  const wrapper = setup({}, {lat: "10000", errorMessage: ""});
  const appComponent = findByTestAttr(wrapper, 'component-season-display');
  expect(appComponent.length).toBe(1);
});

it('calls componentDidMount and set the state', () => {
  jest.spyOn(App.prototype, 'componentDidMount')
  const wrapper = shallow(<App />)
  expect(App.prototype.componentDidMount.mock.calls.length).toBe(1)
})