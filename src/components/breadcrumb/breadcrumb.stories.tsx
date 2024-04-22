import { Meta, StoryObj } from '@storybook/react'

import { Breadcrumb } from '.'

const meta: Meta<typeof Breadcrumb> = {
  component: Breadcrumb,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Breadcrumb>

export const DefaultBreadcrumb: Story = {
  render: () => (
    <Breadcrumb
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
      ]}
    />
  ),
}
