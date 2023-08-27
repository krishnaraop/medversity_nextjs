import './globals.css'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './dashboard/page';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Medversity Knotify task',
  description: ' create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='d-flex flex-row'>
        <div className='col-3'> <Dashboard/></div>
        <div className='col-9'> {children}</div>    
        </body>
    </html>
  )
}
