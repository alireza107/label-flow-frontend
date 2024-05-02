import React from 'react';

import { Avatar } from '../avatar';
import '../button';
import { Button } from '../button';
import { IconMoon, IconNotifications } from '../icons';

export const Header: React.FC = () => {
  return (
    <header className="flex items-center border-b border-base-75 py-4">
      <div className="container flex justify-end">
        <div className="flex items-center justify-center gap-1 rounded-3xl bg-white p-2">
          <Button shape="circle">
            <IconNotifications stroke-width="0.1" fill="currentColor" />
          </Button>
          <Button shape="circle">
            <IconMoon className="base-200" />
          </Button>
          <Avatar src="/images/profile.jpg" size="tiny" />
        </div>
      </div>
    </header>
  );
};
