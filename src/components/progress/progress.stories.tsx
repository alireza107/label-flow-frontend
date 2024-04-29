import { withTests } from '@storybook/addon-jest';
import { Meta, StoryObj } from '@storybook/react';

import results from '../../../.jest-test-results.json';
import { Progress } from './progress';

const meta: Meta<typeof Progress> = {
  component: Progress,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Tests: Story = {
  render: (args) => <Progress {...args} value={10} />,
};

Tests.decorators = [withTests({ results })];

export const ProgressSpinner: Story = {
  render: () => (
    <>
      <Progress value={20} size="tiny" />
      <Progress value={30} size="small" />
      <Progress value={40} size="normal" />
      <Progress value={50} size="large" />
    </>
  ),
};

export const ProgressSpinnerWithColors: Story = {
  render: () => (
    <>
      <Progress value={10} size="normal" variant="primary" />
      <Progress value={30} size="normal" variant="success" />
      <Progress value={50} size="normal" variant="info" />
      <Progress value={70} size="normal" variant="warning" />
      <Progress value={90} size="normal" variant="error" />
    </>
  ),
};
