'use client'

import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

import { IconHome, IconProfile, IconSetting } from '../icons'
import MenuItem from '../menu-item/menu-item'

export const Sidebar: React.FC = () => {
  const SidebarItems = [
    {
      title: 'Home',
      icon: <IconHome />,
      link: '/',
    },
    {
      title: 'Profile',
      icon: <IconProfile />,
      link: '/profile',
    },
    {
      title: 'Settings',
      icon: <IconSetting />,
      link: '/settings',
    },
  ]

  const pathname = usePathname()

  const router = useRouter()

  return (
    <aside className="py-12 border-r-[1px] border-base-75">
      <div className="px-12 mb-3">
        <Image src="/images/logo.svg" alt="logo" width={194} height={85} />
      </div>
      <ul>
        {SidebarItems.map((item, index) => (
          <MenuItem
            key={index}
            text={item.title}
            icon={item.icon}
            isActive={pathname === item.link}
            onClick={() => router.push(item.link)}
          />
        ))}
      </ul>
    </aside>
  )
}
