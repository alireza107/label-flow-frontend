import { render } from '@testing-library/react';

import { Skeleton } from '.';

describe('Skeleton component', () => {
  test('Render a default skeleton', () => {
    const { container } = render(<Skeleton />);
    expect(container.querySelector('.animate-pulse')).toBeInTheDocument();
  });

  test('Render a circle skeleton', () => {
    const { container } = render(<Skeleton shape="circle" />);
    expect(container.querySelector('.rounded-full')).toBeInTheDocument();
  });

  test('Render a rectangle skeleton', () => {
    const { container } = render(<Skeleton shape="rect" />);
    expect(container.querySelector('.rounded')).toBeInTheDocument();
  });

  test('Render a custom class name', () => {
    const className = 'custom-class';
    const { container } = render(<Skeleton className={className} />);
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });
});
