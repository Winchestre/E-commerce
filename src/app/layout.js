import Navbar from './components/Navbar'
import './globals.css'
import { Inter_Tight } from 'next/font/google'

const interTight = Inter_Tight(
  { subsets: ['latin'],
    weight: ['200', '400', '700']
  })

export const metadata = {
  title: 'Sneakers',
  description: 'Crypto, Binance, Coinbadse',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={interTight.className}>
          <Navbar />
          <div className="container">
            {children}
          </div>
        </body>

      
    </html>
  )
}
