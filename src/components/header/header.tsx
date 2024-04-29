import React from 'react';

import { Avatar } from '../avatar';

export const Header: React.FC = () => {
  return (
    <header className="flex items-center border-b border-base-75">
      <div className="container flex justify-end">
        <Avatar src="/images/profile.jpg" size="small" />
      </div>
    </header>
  );
};
