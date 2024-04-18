import { Sidebar } from '@/components/sidebar/sidebar'

import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang="en">
      <body className="min-h-screen flex">
        <Sidebar />
        <main className="w-full">{children}</main>
      </body>
    </html>
  )
}
