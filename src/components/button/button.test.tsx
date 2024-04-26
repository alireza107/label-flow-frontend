import { render, screen } from '@testing-library/react'

import { Button } from './button'

describe('Button component', () => {
  test('Render a default button', () => {
    const { getByText } = render(<Button>Click me</Button>)
    expect(getByText('Click me')).toBeInTheDocument()
  })

  test('Render a disabled button', () => {
    render(<Button isDisabled>Click me</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  test('Applies correct css class for different button variant', () => {
    const { rerender } = render(<Button variant="primary">Click me</Button>)
    expect(screen.getByRole('button')).toHaveClass('btn-primary')

    rerender(<Button variant="error">Click me</Button>)
    expect(screen.getByRole('button')).toHaveClass('btn-error')

    rerender(<Button variant="warning">Click me</Button>)
    expect(screen.getByRole('button')).toHaveClass('btn-warning')

    rerender(<Button variant="success">Click me</Button>)
    expect(screen.getByRole('button')).toHaveClass('btn-success')

    rerender(<Button variant="info">Click me</Button>)
    expect(screen.getByRole('button')).toHaveClass('btn-info')
  })

  test('Applies correct css class for different button size', () => {
    const { rerender } = render(<Button size="tiny">Click me</Button>)
    expect(screen.getByRole('button')).toHaveClass('btn-xs')

    rerender(<Button size="small">Click me</Button>)
    expect(screen.getByRole('button')).toHaveClass('btn-sm')

    rerender(<Button size="normal">Click me</Button>)
    expect(screen.getByRole('button')).not.toHaveClass('btn-xs')
    expect(screen.getByRole('button')).not.toHaveClass('btn-sm')
    expect(screen.getByRole('button')).not.toHaveClass('btn-lg')

    rerender(<Button size="large">Click me</Button>)
    expect(screen.getByRole('button')).toHaveClass('btn-lg')
  })

  test('Applies correct css class for different button shape', () => {
    const { rerender } = render(<Button shape="wide">Click me</Button>)
    expect(screen.getByRole('button')).toHaveClass('btn-wide')

    rerender(<Button shape="full">Click me</Button>)
    expect(screen.getByRole('button')).toHaveClass('btn-block')

    rerender(<Button shape="square">Click me</Button>)
    expect(screen.getByRole('button')).toHaveClass('btn-square')

    rerender(<Button shape="default">Click me</Button>)
    expect(screen.getByRole('button')).not.toHaveClass('btn-wide')
    expect(screen.getByRole('button')).not.toHaveClass('btn-block')
    expect(screen.getByRole('button')).not.toHaveClass('btn-square')
  })

  test('Render a loading button', () => {
    render(
      <Button isLoading loadingText="Loading...">
        Click me
      </Button>,
    )
    expect(screen.getByRole('button')).toHaveClass('pointer-events-none opacity-8-')
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })
})
