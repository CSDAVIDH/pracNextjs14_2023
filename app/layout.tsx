import { montserrat } from './ui/fonts';
import './ui/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className={`${montserrat.className} antialiased`}>
      
        {children}
        <footer className='flex justify-center items-center'>
          © La paz - bolvia / Hecho por Vercel.com 
        </footer>
      </body>
    </html>
  );
}
