import Display from './Display';
import React from 'react';
import { render, cleanup, fireEvent, getByTestId } from 'react-testing-library';
import Controls from '../controls/Controls';
import 'jest-dom/extend-expect';

afterEach(cleanup);

describe('Display Component', () => {
  it('defaults to unlocked and open', () => {
    const component = render(<Display />);
    component.getByText(/unlocked/i);
    component.getByText(/open/i);
  });

  it('cannot show locked if open', () => {
    const display = render(<Display />);
    const control = render(<Controls />);
    const lock = control.getByText(/lock gate/i);
    fireEvent.click(lock);
    display.getByText(/unlocked/i);
  });

  it('displays "closed" if the "closed" prop is true', () => {
    const component = render(<Display closed={true} />);
    component.getByText(/closed/i);
  });

  it('displays if gate is open/closed and locked/unlocked', () => {
    const component = render(<Display />);
    component.getByText(/open|closed + locked|unlocked/gi);
  });

  it('displays "closed" if the "closed" prop is true', () => {
    const component = render(<Display locked={true} />);
    component.getByText(/locked/i);
  });

  it('displays open if closed property is false', () => {
    const component = render(<Display locked={false} />);
    component.getByText(/unlocked/i);
  });

  it('has a className of "red-led" when locked', () => {
    const component = render(<Display locked={true} />);
    const field = component.getByTestId('lock');
    expect(field).toHaveClass('red-led');
  });

  it('has a className of "red-led" when closed', () => {
    const component = render(<Display closed={true} />);
    const field = component.getByTestId('position');
    expect(field).toHaveClass('red-led');
  });

  it('has a className of "red-led" when closed', () => {
    const component = render(<Display closed={false} />);
    const field = component.getByTestId('position');
    expect(field).toHaveClass('green-led');
  });

  it('has a className of "red-led" when locked', () => {
    const component = render(<Display locked={false} />);
    const field = component.getByTestId('lock');
    expect(field).toHaveClass('green-led');
  });

  it('displays open if closed property is false', () => {
    const component = render(<Display closed={false} />);
    component.getByText(/open/i);
  });
});
