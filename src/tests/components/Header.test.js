import React from 'react';
import { shallow } from 'enzyme';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { Header } from '../../components/Header';


let wrapper, startLogout;

beforeEach(() => {
  startLogout = jest.fn();
  wrapper = shallow(
    <Header startLogout={ startLogout } />
  );
});

test('should render Header correctly',() => {
  expect(wrapper).toMatchSnapshot();
});

test('Should call startLogout on button click', () => {
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});