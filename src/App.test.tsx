import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import Timer from './components/timer/Timer';

configure({ adapter: new Adapter() });

describe("Counter Testing", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<Timer />);
  });
  test("render the title of counter", () => {
    expect(wrapper.find("div").length).toBeGreaterThanOrEqual(1);
  });
})