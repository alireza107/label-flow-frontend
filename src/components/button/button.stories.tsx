import { Meta, StoryObj } from '@storybook/react'

import { Button } from '.'

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Button>

export const Colors: Story = {
  render: () => (
    <>
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="info">Info</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="error">Error</Button>
    </>
  ),
}

export const Outline: Story = {
  render: () => (
    <>
      <Button isOutline>Default</Button>
      <Button isOutline variant="primary">
        Primary
      </Button>
      <Button isOutline variant="info">
        Info
      </Button>
      <Button isOutline variant="success">
        Success
      </Button>
      <Button isOutline variant="warning">
        Warning
      </Button>
      <Button isOutline variant="error">
        Error
      </Button>
    </>
  ),
}

export const ButtonSizes: Story = {
  render: () => (
    <>
      <Button size="tiny">Tiny</Button>
      <Button size="small">Small</Button>
      <Button size="normal">Normal</Button>
      <Button size="large">Large</Button>
    </>
  ),
}

export const WideButton: Story = {
  render: () => (
    <>
      <Button shape="wide">Wide Button</Button>
    </>
  ),
}

export const FullButton: Story = {
  render: () => (
    <>
      <Button shape="full">Full Button</Button>
    </>
  ),
}

export const SquareButtons: Story = {
  render: () => (
    <>
      <Button size="tiny" shape="square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </Button>
      <Button size="small" shape="square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </Button>
      <Button size="normal" shape="square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </Button>
      <Button size="large" shape="square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </Button>
    </>
  ),
}

export const DisabledButton: Story = {
  render: () => (
    <>
      <Button disabled>Disabled Button</Button>
    </>
  ),
}

export const IconButton: Story = {
  render: () => (
    <>
      <Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        Submit
      </Button>
      <Button>
        Submit
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </Button>
    </>
  ),
}

export const ButtonWithLoading: Story = {
  render: () => (
    <>
      <Button isLoading={true} loadingText="Loading"></Button>
      <Button isLoading={true} loadingType={'ring'} loadingText="Loading"></Button>
      <Button variant="primary" isLoading={true} loadingText="Loading"></Button>
      <Button isOutline isLoading={true} loadingType={'ring'} loadingText="Loading"></Button>
    </>
  ),
}
