import { withTests } from '@storybook/addon-jest'
import { Meta, StoryObj } from '@storybook/react'

import results from '../../../.jest-test-results.json'
import { Tabs } from './tabs'

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Tabs>

const tabs = [
  {
    label: 'Tab 1',
    content: 'Tab 1 content',
  },
  {
    label: 'Tab 2',
    content: 'Tab 2 content',
  },
  {
    label: 'Tab 3',
    content: 'Tab 3 content',
  },
]

export const Tests: Story = {
  render: (args) => <Tabs {...args} tabs={tabs} />,
}

Tests.decorators = [withTests({ results })]

export const Tab: Story = {
  render: () => <Tabs tabs={tabs} />,
}
