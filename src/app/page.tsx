import { Tabs } from '@/components/tabs/tabs'

export default function Home(): JSX.Element {
  return (
    <div>
      <Tabs
        tabs={[
          {
            label: 'Tab 1',
            content: 'Tab 1 content',
          },
          {
            label: 'Tab 2',
            content: 'Tab 2 content',
          },
          {
            label: 'Tab 3',
            content: 'Tab 3 content',
          },
        ]}
      />
    </div>
  )
}
