import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import MiniDrawer from '@/components/Drawer'
import background from '/dark-background.jpg'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cafe Franks | Home',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ height: '100vh', backgroundImage: `url(/background.png)`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
        <MiniDrawer children={children} />
      </body>
      
    </html>
  )
}
