import Footer from './components/Footer';
import Navbar from './components/Navbar'
import './globals.css'
import localFont from 'next/font/local';

export const metadata = {
  title: 'Cari Rumah | Temukan Rumah Impianmu',
  description: 'Cari Rumah, Temukan Rumah Impianmu',
}

const sfPro = localFont({ 
  src: [
    {
      path: '../public/fonts/sf-pro-text-regular.ttf',
      weight: '400',
      style: 'regular'
    },
    {
      path: '../public/fonts/sf-pro-text-medium.ttf',
      weight: '500',
      style: 'medium'
    },
    {
      path: '../public/fonts/sf-pro-text-semibold.ttf',
      weight: '600',
      style: 'semibold'
    },
    {
      path: '../public/fonts/sf-pro-text-bold.ttf',
      weight: '700',
      style: 'bold'
    }
  ],
  variable: '--font-sansation',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${sfPro.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
