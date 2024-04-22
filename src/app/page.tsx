import { Breadcrumb } from '@/components/breadcrumb'

export default function Home(): JSX.Element {
  const breadcrumbs = [
    { name: 'Dashboard', path: '/' },
    { name: 'Projects', path: '/projects' },
  ]

  return (
    <div>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      main test
    </div>
  )
}
