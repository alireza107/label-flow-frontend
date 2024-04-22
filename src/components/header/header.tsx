import React from 'react'

import Image from 'next/image'

export const Header: React.FC = () => {
  return (
    <header className="border-b border-base-75 flex items-center">
      <div className="container flex justify-end">
        <Image
          src="/images/profile.jpg"
          alt="Logo"
          width={50}
          height={50}
          className="aspect-square rounded-full"
        />
      </div>
    </header>
  )
}
