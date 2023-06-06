import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Slider } from './Slider';

describe('Slider', () => {
  const label = 'label text';

  it('renders without props', () => {
    render(<Slider />);

    expect(screen.queryByText(label)).toBeNull();
  });

  it('renders with label prop', () => {
    render(<Slider label={label} />);

    expect(screen.queryByText(label)).toBeInTheDocument();
  });
});
