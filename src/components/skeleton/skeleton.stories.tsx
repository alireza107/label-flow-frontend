import { withTests } from '@storybook/addon-jest';
import { Meta, StoryObj } from '@storybook/react';

import results from '../../../.jest-test-results.json';
import { Skeleton } from './skeleton';

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Tests: Story = {
  render: (args) => <Skeleton {...args} />,
};

Tests.decorators = [withTests({ results })];

export const Shape: Story = {
  render: () => (
    <>
      <Skeleton shape="circle" width={25} height={25} />
      <Skeleton shape="rect" width={200} height={10} />
    </>
  ),
};
