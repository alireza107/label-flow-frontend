import { withTests } from '@storybook/addon-jest';
import { Meta, StoryObj } from '@storybook/react';

import { Breadcrumb } from '.';
import results from '../../../.jest-test-results.json';

const meta: Meta<typeof Breadcrumb> = {
  component: Breadcrumb,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Tests: Story = {
  render: (args) => <Breadcrumb {...args} breadcrumbs={[{ name: 'test', path: '/' }]} />,
};

Tests.decorators = [withTests({ results })];

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
};
