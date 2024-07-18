'use client'

import './globals.css'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Age Calculator</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
