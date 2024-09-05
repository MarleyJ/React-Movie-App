import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { App } from './App.js';
 
it('should render', () => {
 // render(<App />);
 
  expect(screen.getByText('React App')).toBeInTheDocument();
});
