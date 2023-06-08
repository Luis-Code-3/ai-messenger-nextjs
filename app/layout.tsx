import './globals.css'
import Navbar from './components/Navbar'
import {AuthProvider} from "./context/auth.context"

export const metadata = {
  title: 'AI Messenger',
  description: 'The best AI Messenger out there!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AuthProvider initialUser={''}>
        <body>
          <Navbar/>
          {children}
        </body>
      </AuthProvider>
    </html>
  )
}
