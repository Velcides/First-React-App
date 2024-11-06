import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Testa se a aplicação renderiza tudo que está sendo passado na tela naquele momento
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
