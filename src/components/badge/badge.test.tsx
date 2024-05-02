import { render } from '@testing-library/react';

import { Badge } from './badge';

describe('Badge component', () => {
  test('Render a default badge', () => {
    const { container } = render(<Badge>Test</Badge>);
    expect(container.querySelector('.badge')).toBeInTheDocument();
  });

  test('Render a badge with custom variant', () => {
    const { rerender } = render(<Badge variant="primary">Test</Badge>);
    expect(document.querySelector('.badge-primary')).toBeInTheDocument();

    rerender(<Badge variant="info">Test</Badge>);
    expect(document.querySelector('.badge-info')).toBeInTheDocument();

    rerender(<Badge variant="success">Test</Badge>);
    expect(document.querySelector('.badge-success')).toBeInTheDocument();

    rerender(<Badge variant="warning">Test</Badge>);
    expect(document.querySelector('.badge-warning')).toBeInTheDocument();

    rerender(<Badge variant="error">Test</Badge>);
    expect(document.querySelector('.badge-error')).toBeInTheDocument();
  });

  test('Render a badge with custom size', () => {
    const { rerender } = render(<Badge size="tiny">Test</Badge>);
    expect(document.querySelector('.badge-xs')).toBeInTheDocument();

    rerender(<Badge size="small">Test</Badge>);
    expect(document.querySelector('.badge-sm')).toBeInTheDocument();

    rerender(<Badge size="normal">Test</Badge>);
    expect(document.querySelector('.badge-md')).toBeInTheDocument();

    rerender(<Badge size="large">Test</Badge>);
    expect(document.querySelector('.badge-lg')).toBeInTheDocument();
  });
});
