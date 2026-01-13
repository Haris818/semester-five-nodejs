import { render, screen } from '@testing-library/react';
import App from './App';

test('renders form heading', () => {
  render(<App />);
  const heading = screen.getByText(/simple react form/i);
  expect(heading).toBeInTheDocument();
});
