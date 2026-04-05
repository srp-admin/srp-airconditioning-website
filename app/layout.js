import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SRP Airconditioning - Expert Chiller Services & Repairs',
  description: 'Leading provider of chiller installation, maintenance, and repair services in North India. 24/7 emergency service available.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
