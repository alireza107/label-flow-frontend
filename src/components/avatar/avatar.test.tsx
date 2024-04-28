import { render } from '@testing-library/react'

import { Avatar } from './avatar'

describe('Avatar', () => {
  test('Render a default avatar', () => {
    const { container } = render(<Avatar />)
    expect(container.querySelector('.avatar')).toBeInTheDocument()
  })

  test('Render a avatar with a custom size', () => {
    const { container, rerender } = render(<Avatar size="tiny" />)
    expect(container.querySelector('.avatar')).toHaveStyle('width: 40px')
    expect(container.querySelector('.avatar')).toHaveStyle('height: 40px')

    rerender(<Avatar size="small" />)
    expect(container.querySelector('.avatar')).toHaveStyle('width: 50px')
    expect(container.querySelector('.avatar')).toHaveStyle('height: 50px')

    rerender(<Avatar size="normal" />)
    expect(container.querySelector('.avatar')).toHaveStyle('width: 70px')
    expect(container.querySelector('.avatar')).toHaveStyle('height: 70px')

    rerender(<Avatar size="large" />)
    expect(container.querySelector('.avatar')).toHaveStyle('width: 120px')
    expect(container.querySelector('.avatar')).toHaveStyle('height: 120px')
  })

  test('Render a avatar with a custom variant', () => {
    const { container, rerender } = render(<Avatar variant="primary" />)
    expect(container.querySelector('.avatar')).toHaveClass('avatar-ringed-primary')

    rerender(<Avatar variant="error" />)
    expect(container.querySelector('.avatar')).toHaveClass('avatar-ringed-error')

    rerender(<Avatar variant="warning" />)
    expect(container.querySelector('.avatar')).toHaveClass('avatar-ringed-warning')

    rerender(<Avatar variant="success" />)
    expect(container.querySelector('.avatar')).toHaveClass('avatar-ringed-success')

    rerender(<Avatar variant="info" />)
    expect(container.querySelector('.avatar')).toHaveClass('avatar-ringed-info')
  })
})
