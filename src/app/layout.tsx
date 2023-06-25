import './globals.css'
import { Roboto  } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const roboto = Roboto ({ 
  weight: ['100', '300', '400', '500','700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Dictionary App',
  description: 'Dictionary App, search any word you want',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
