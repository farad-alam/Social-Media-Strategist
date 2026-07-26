export const metadata = {
  title: 'Sanity Studio',
  description: 'Sanity Studio admin panel',
  robots: 'noindex, nofollow',
}

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
