import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Home from './Home';

describe('Home', () => {
  it('renders headline', () => {
    render(<Home />);

    expect(screen.getByText('Home Page')).toBeInTheDocument();
    expect(screen.getByRole('note')).toBeInTheDocument();
  });
});
