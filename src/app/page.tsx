import Image from 'next/image'

import MenuItem from '@/components/menu-item/menu-item'

export default function Home(): JSX.Element {
  return (
    <div>
      <MenuItem
        text="asdf"
        icon={<Image src="/images/Icon.svg" alt="icon" width={35} height={35} />}
      />
      <MenuItem
        text="asdf"
        isActive
        icon={<Image src="/images/Icon.svg" alt="icon" width={35} height={35} />}
      />
    </div>
  )
}
