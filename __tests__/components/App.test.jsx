import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists('AppContext')).toBe(true);
  });
});
