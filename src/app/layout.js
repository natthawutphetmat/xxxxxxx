import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "../styls/globals.css";
import "../styls/app.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Line from "./components/line";
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/img/favicon.ico" />
      <body className={inter.className}>
        <Navbar />
     
        
        {children}

        <Line />
        <Footer />
      </body>

      <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"/> 
    </html>
  );
}
