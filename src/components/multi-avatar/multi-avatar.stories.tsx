import { withTests } from '@storybook/addon-jest';
import { Meta, StoryObj } from '@storybook/react';

import results from '../../../.jest-test-results.json';
import { MultiAvatar } from './multi-avatar';

const meta: Meta<typeof MultiAvatar> = {
  component: MultiAvatar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MultiAvatar>;

export const Tests: Story = {
  render: (args) => <MultiAvatar {...args} />,
};
Tests.decorators = [withTests({ results })];

export const MultiAvatarSizes: Story = {
  render: () => (
    <>
      <MultiAvatar
        avatars={[
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
        ]}
        size="tiny"
        max={4}
      />

      <MultiAvatar
        avatars={[
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
        ]}
        size="small"
        max={4}
      />

      <MultiAvatar
        avatars={[
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
        ]}
        size="normal"
        max={4}
      />

      <MultiAvatar
        avatars={[
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
        ]}
        size="large"
        max={4}
      />
    </>
  ),
};

export const MultiAvatarWithMax: Story = {
  render: () => (
    <>
      <MultiAvatar
        avatars={[
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
        ]}
        size="tiny"
        max={6}
      />
      <MultiAvatar
        avatars={[
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
        ]}
        size="tiny"
        max={4}
      />
      <MultiAvatar
        avatars={[
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
        ]}
        size="tiny"
        max={2}
      />
      <MultiAvatar
        avatars={[
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
          'https://avatars.githubusercontent.com/u/12592949?v=4',
        ]}
        size="tiny"
        max={1}
      />
    </>
  ),
};
