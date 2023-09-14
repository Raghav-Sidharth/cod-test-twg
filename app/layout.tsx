export const metadata = {
  title: 'The Web Guys - SoT Code Test',
  description: 'Created by Raghav Sidharth',
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
