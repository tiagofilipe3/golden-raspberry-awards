import './globals.css'

import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import SideBar from '@/app/components/SideBar'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-full">
          <SideBar />
          <div className="ml-[235px] flex w-[calc(100%-235px)]">{children}</div>
        </div>
        <Script src="./node_modules/preline/dist/preline.js"></Script>
      </body>
    </html>
  )
}
