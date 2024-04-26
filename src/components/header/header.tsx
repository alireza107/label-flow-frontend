import React from 'react'

import { Avatar } from '../avatar'

export const Header: React.FC = () => {
  return (
    <header className="border-b border-base-75 flex items-center">
      <div className="container flex justify-end">
        <Avatar src="/images/profile.jpg" size="small" />
      </div>
    </header>
  )
}
