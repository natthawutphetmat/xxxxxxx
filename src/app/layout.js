import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "../styls/globals.css";
import "../styls/app.css";
import "../styls/admin.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Line from "./components/line";
const inter = Inter({ subsets: ["latin"] });
import { GoogleTagManager } from '@next/third-parties/google'
import { GoogleAnalytics } from '@next/third-parties/google'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
 
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="icon" href="/img/favicon.ico" />
      <body className={inter.className}>
        <Navbar />
        <Line />

        <header> 
   
     </header>
     
        
        {children}

        <GoogleTagManager gtmId="GTM-KW5HFMSN" />
        <Footer />
      </body>

      <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"/> 

      <GoogleAnalytics gaId="G-XYZ" />
    </html>
  );
}
