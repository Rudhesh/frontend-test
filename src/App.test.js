import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.jsx';
import { useAppSelector } from './redux/redux.hooks';
import { testUseAppSelector } from './redux/testAppSelector.js';

jest.mock('./redux/redux.hooks');

describe('App', () => {
  beforeEach(() => {
    useAppSelector.mockImplementation(testUseAppSelector);
  });

  it('renders learn react lick', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
