import { render } from '@testing-library/react';

import { MultiAvatar } from './multi-avatar';

describe('MultiAvatar', () => {
  test('Render a default multi-avatar', () => {
    const { container } = render(
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
      />,
    );
    expect(container.querySelector('.multi-avatar')).toBeInTheDocument();
  });

  test('Render a multi-avatar with a custom max', () => {
    const { container } = render(
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
      />,
    );
    expect(container.querySelectorAll('.avatar')).toHaveLength(4);
    expect(container.querySelectorAll('.avatar')).not.toHaveLength(5);
  });
});
