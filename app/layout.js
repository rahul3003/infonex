import './globals.css'

export const metadata = {
  metadataBase: new URL('https://infonex.in'),
  title: 'INFONEX | Planting Tech Seeds in Every Classroom | Robotics & STEM Labs Bangalore',
  description: 'Infonex partners with schools & colleges for hands-on robotics, AI & coding, and turnkey STEM lab setups. Aligned with NEP 2020. Learn · Innovate · Transform.',
  keywords: 'Robotics education, STEM Labs Bangalore, AI and Coding for schools, Atal Tinkering Lab ATL, NEP 2020 robotics curriculum, Infonex',
  openGraph: {
    title: 'INFONEX | Robotics, AI & STEM Labs for Schools',
    description: 'Planting Tech Seeds in Every Classroom - Turnkey STEM & Robotics Labs for schools across India.',
    images: ['/infonex-poster.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-slate-900 antialiased selection:bg-brand-orange selection:text-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}
