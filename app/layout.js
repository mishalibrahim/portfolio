import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Notification from "@/components/Notification";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: "MishalIbrahim",
  description: "Mishals personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <Nav/>
        {children}
        <Footer/>
        <Notification/>
        </body>
    </html>
  );
}
