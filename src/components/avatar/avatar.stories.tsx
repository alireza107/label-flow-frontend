import { withTests } from '@storybook/addon-jest';
import { Meta, StoryObj } from '@storybook/react';

import results from '../../../.jest-test-results.json';
import { Avatar } from './avatar';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Tests: Story = {
  render: (args) => <Avatar {...args} />,
};

Tests.decorators = [withTests({ results })];

export const AvatarSizes: Story = {
  render: () => (
    <>
      <Avatar size="tiny" />
      <Avatar size="small" />
      <Avatar size="normal" />
      <Avatar size="large" />
    </>
  ),
};

export const AvatarWithColors: Story = {
  render: () => (
    <>
      <Avatar size="normal" variant="primary" />
      <Avatar size="normal" variant="success" />
      <Avatar size="normal" variant="info" />
      <Avatar size="normal" variant="warning" />
      <Avatar size="normal" variant="error" />
    </>
  ),
};

export const AvatarWithImage: Story = {
  render: () => (
    <>
      <Avatar size="tiny" src="https://avatars.githubusercontent.com/u/12592949?v=4" />
      <Avatar size="small" src="https://avatars.githubusercontent.com/u/12592949?v=4" />
      <Avatar size="normal" src="https://avatars.githubusercontent.com/u/12592949?v=4" />
      <Avatar size="large" src="https://avatars.githubusercontent.com/u/12592949?v=4" />
    </>
  ),
};

export const AvatarWithImageAndColors: Story = {
  render: () => (
    <>
      <Avatar
        size="tiny"
        src="https://avatars.githubusercontent.com/u/12592949?v=4"
        variant="primary"
      />
      <Avatar
        size="small"
        src="https://avatars.githubusercontent.com/u/12592949?v=4"
        variant="success"
      />
      <Avatar
        size="normal"
        src="https://avatars.githubusercontent.com/u/12592949?v=4"
        variant="info"
      />
      <Avatar
        size="large"
        src="https://avatars.githubusercontent.com/u/12592949?v=4"
        variant="warning"
      />
    </>
  ),
};
