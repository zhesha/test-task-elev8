import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders form with title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Pricing/i);
  expect(linkElement).toBeInTheDocument();
});
