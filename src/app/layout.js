"use client";
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
import { useEffect } from 'react';

export default function RootLayout({ children }) {
 useEffect(() => {
    // โค้ด Meta Pixel
    !(function(f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '401820939571125');
    fbq('track', 'PageView');
   return () => {
      // Optional: remove fbq or other clean-up code if needed
    };
  }, []);
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
<noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=401820939571125&ev=PageView&noscript=1"
          />
        </noscript>
        <GoogleTagManager gtmId="GTM-KW5HFMSN" />
        <Footer />
      </body>

      <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"/> 

      <GoogleAnalytics gaId="G-XYZ" />
    </html>
  );
}
