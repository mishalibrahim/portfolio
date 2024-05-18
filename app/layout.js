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
  title: "Mishal Ibrahim - Front-End Developer & Full-Stack Enthusiast",
  description: "Explore Mishal Ibrahim's personal portfolio showcasing projects, skills, and expertise in front-end development, React, and full-stack technologies. Discover his journey and professional accomplishments in web development.",
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
