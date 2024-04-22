import { Breadcrumb } from '@/components/breadcrumb'

export default function Home(): JSX.Element {
  const links = [
    { name: 'Dashboard', path: '/' },
    { name: 'Projects', path: '/projects' },
  ]

  return (
    <div>
      <Breadcrumb links={links} />
      main test
    </div>
  )
}
