import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ecommerce home page', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /ecommerce home/i })
  ).toBeInTheDocument();
});
