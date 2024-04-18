import { DM_Sans, Vazirmatn } from 'next/font/google'

import { Sidebar } from '@/components/sidebar/sidebar'

import './globals.css'

const dm_sans = DM_Sans({
  display: 'swap',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  variable: '--font-dm-sans',
})

const vazir = Vazirmatn({
  display: 'swap',
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-vazir',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang="en" className={`${dm_sans.variable} ${vazir.variable}`}>
      <body className="min-h-screen flex">
        <Sidebar />
        <main className="w-full">{children}</main>
      </body>
    </html>
  )
}
