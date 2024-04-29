import { render, screen } from '@testing-library/react';
import { describe } from 'node:test';

import { Breadcrumb } from '.';

describe('Breadcrumb', () => {
  it('renders a breadcrumb', () => {
    render(<Breadcrumb breadcrumbs={[{ name: 'test', path: '/' }]} />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
