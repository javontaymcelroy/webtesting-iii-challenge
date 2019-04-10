import React from 'react';
import { render, cleanup, fireEvent, getByTestId } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';

afterEach(cleanup);

describe('Dashboard Component', () => {
  it('contains Display and Controls', () => {
    const component = render(<Dashboard />);
    component.getByText(/open/i);
    component.getByText(/unlocked/i);
  });

  it('button switches text', () => {
    const component = render(<Dashboard />);
    const button = component.getByText(/close gate/i);
    fireEvent.click(button);
    expect(button).toHaveTextContent(/open gate/i);
  });
});
