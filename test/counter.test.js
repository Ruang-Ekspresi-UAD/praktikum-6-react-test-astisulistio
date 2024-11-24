import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './counter'; // Pastikan path-nya benar

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

    fireEvent.click(incrementButton); // Naikkan count ke 1
    fireEvent.click(resetButton); // Tekan tombol reset
    expect(counterValue).toHaveTextContent('0'); // Pastikan nilai kembali ke 0
  });
});
