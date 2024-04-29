import { render } from '@testing-library/react';

import { Progress } from './progress';

describe('Progress component', () => {
  test('Render a default progress bar', () => {
    const { container } = render(<Progress value={20} />);
    expect(container.querySelector('.progress')).toBeInTheDocument();
  });

  test('Render a default progress bar with correct value', () => {
    const value = 20;
    const { container } = render(<Progress value={value} />);
    const progressBar = container.querySelector('.progress') as HTMLProgressElement;
    expect(progressBar.value).toBe(value);
  });

  test('Render a progress bar with custom size', () => {
    const { rerender } = render(<Progress size="tiny" value={20} />);
    expect(document.querySelector('.progress-xs')).toBeInTheDocument();

    rerender(<Progress size="small" value={20} />);
    expect(document.querySelector('.progress-sm')).toBeInTheDocument();

    rerender(<Progress size="normal" value={20} />);
    expect(document.querySelector('.progress-md')).toBeInTheDocument();

    rerender(<Progress size="large" value={20} />);
    expect(document.querySelector('.progress-lg')).toBeInTheDocument();
  });

  test('Render a progress bar with custom variant', () => {
    const { rerender } = render(<Progress variant="primary" value={20} />);
    expect(document.querySelector('.progress-primary')).toBeInTheDocument();

    rerender(<Progress variant="info" value={20} />);
    expect(document.querySelector('.progress-info')).toBeInTheDocument();

    rerender(<Progress variant="success" value={20} />);
    expect(document.querySelector('.progress-success')).toBeInTheDocument();

    rerender(<Progress variant="warning" value={20} />);
    expect(document.querySelector('.progress-warning')).toBeInTheDocument();

    rerender(<Progress variant="error" value={20} />);
    expect(document.querySelector('.progress-error')).toBeInTheDocument();
  });

  test('Render a progress bar with custom class name', () => {
    const className = 'custom-class';
    const { container } = render(<Progress className={className} value={20} />);
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });
});
