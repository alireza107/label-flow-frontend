import { withTests } from '@storybook/addon-jest';
import { Meta, StoryObj } from '@storybook/react';

import { Badge } from '.';
import results from '../../../.jest-test-results.json';

const meta: Meta<typeof Badge> = {
  component: Badge,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Tests: Story = {
  render: (args) => <Badge {...args}>Test</Badge>,
};

Tests.decorators = [withTests({ results })];

export const BadgeColors: Story = {
  render: () => (
    <>
      <Badge>Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
    </>
  ),
};

export const BadgeSizes: Story = {
  render: () => (
    <>
      <Badge size="tiny">Tiny</Badge>
      <Badge size="small">Small</Badge>
      <Badge size="normal">Normal</Badge>
      <Badge size="large">Large</Badge>
    </>
  ),
};
