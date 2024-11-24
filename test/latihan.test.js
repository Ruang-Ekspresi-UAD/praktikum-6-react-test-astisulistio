import { render, screen, fireEvent } from '@testing-library/react';
import { Counter, Greeting, AlertButton } from './latihan'; // Gantilah dengan path komponen kalian
import '@testing-library/jest-dom';
import React from 'react';

// Test untuk Counter Component
describe('Counter Component', () => {
  test('Counter default value must be 0', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counter-value');
    expect(counterValue).toHaveTextContent('0');
  });

  test('Increment works when button clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId('increment-button');
    const counterValue = screen.getByTestId('counter-value');

    fireEvent.click(incrementButton);
    expect(counterValue).toHaveTextContent('1');
  });

  test('Decrement works when button clicked', () => {
    render(<Counter />);
    const decrementButton = screen.getByTestId('decrement-button');
    const counterValue = screen.getByTestId('counter-value');

    fireEvent.click(decrementButton);
    expect(counterValue).toHaveTextContent('-1');
  });

  test('Reset the count using reset button', () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId('increment-button');
    const resetButton = screen.getByTestId('reset-button');
    const counterValue = screen.getByTestId('counter-value');

    fireEvent.click(incrementButton);
    fireEvent.click(resetButton);
    expect(counterValue).toHaveTextContent('0');
  });
});

// Test untuk Greeting Component
describe('Greeting Component', () => {
  test('Greeting component displays correct name (my name)', () => {
    render(<Greeting name="Asti" />);
    const greetingText = screen.getByTestId('greeting');
    expect(greetingText).toHaveTextContent('Hello, Asti');
  });

  test('Greeting component displays correct name (dosen name)', () => {
    render(<Greeting name="Dr. Rahmat" />);
    const greetingText = screen.getByTestId('greeting');
    expect(greetingText).toHaveTextContent('Hello, Dr. Rahmat');
  });
});

// Test untuk AlertButton Component
describe('AlertButton Component', () => {
  test('Triggers alert with correct message when clicked', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<AlertButton message="This is an alert message" />);

    const alertButton = screen.getByTestId('alert-button');
    fireEvent.click(alertButton);

    expect(alertMock).toHaveBeenCalledWith('This is an alert message');
    alertMock.mockRestore();
  });
});
