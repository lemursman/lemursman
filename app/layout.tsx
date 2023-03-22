import './globals.css'

export const metadata = {
  title: 'lemursman',
  description: 'Open source outfit.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
