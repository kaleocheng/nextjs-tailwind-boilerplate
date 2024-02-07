import { Providers } from './providers'
import '../styles/globals.css'

export const metadata = {
  title: 'NextJS + TailWindCSS Boilerplate',
  description: 'Bilerplate for web developer'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="bg-neutral-50">
            <main className="flex justify-center gap-6">
              <div className="">{children}</div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
