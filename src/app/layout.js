import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "ARITRO.DEV | Frontend Developer ",
  description: "I build responsive, high-performance web applications using Next.js and modern design patterns. Focused on creating seamless user experiences with precision.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-background text-on-surface selection:bg-primary-container selection:text-on-primary-container`} suppressHydrationWarning
      >
        {children}

          <ToastContainer />
      </body>
    </html>
  );
}
