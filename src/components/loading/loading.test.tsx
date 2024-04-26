import { render } from '@testing-library/react'

import { Loading } from './loading'

describe('Loading component', () => {
  test('Render a default loading spinner', () => {
    const { container } = render(<Loading />)
    expect(container.querySelector('.loading-spinner')).toBeInTheDocument()
  })

  test('Render a loading ring', () => {
    const { container } = render(<Loading type="ring" />)
    expect(container.querySelector('.loading-ring')).toBeInTheDocument()
  })

  test('Render a loading spinner with custom size', () => {
    const { rerender } = render(<Loading size="tiny" />)
    expect(document.querySelector('.loading-xs')).toBeInTheDocument()

    rerender(<Loading size="small" />)
    expect(document.querySelector('.loading-sm')).toBeInTheDocument()

    rerender(<Loading size="normal" />)
    expect(document.querySelector('.loading-md')).toBeInTheDocument()

    rerender(<Loading size="large" />)
    expect(document.querySelector('.loading-lg')).toBeInTheDocument()
  })

  test('Render a loading spinner with custom variant', () => {
    const { rerender } = render(<Loading variant="primary" />)
    expect(document.querySelector('.loading-primary')).toBeInTheDocument()

    rerender(<Loading variant="info" />)
    expect(document.querySelector('.loading-info')).toBeInTheDocument()

    rerender(<Loading variant="success" />)
    expect(document.querySelector('.loading-success')).toBeInTheDocument()

    rerender(<Loading variant="warning" />)
    expect(document.querySelector('.loading-warning')).toBeInTheDocument()

    rerender(<Loading variant="error" />)
    expect(document.querySelector('.loading-error')).toBeInTheDocument()
  })
})
