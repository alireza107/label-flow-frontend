import { DM_Sans } from 'next/font/google'

import { Sidebar } from '@/components/sidebar/sidebar'

import './globals.css'

const dm_sans = DM_Sans({
  display: 'swap',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  variable: '--font-dm-sans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang="en" className={`${dm_sans.variable}`}>
      <body className="min-h-screen flex">
        <Sidebar />
        <main className="w-full">{children}</main>
      </body>
    </html>
  )
}
