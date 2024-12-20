import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import 'sweetalert2/dist/sweetalert2.min.css';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phyton Raptors",
  description: "Improve Your Experience",
  icons: "https://b.top4top.io/p_32740fuzl1.png",
};

const HeadContent = () => (
  <head>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="apple-touch-icon" sizes="192x192" href="https://b.top4top.io/p_32740fuzl1.png" />
    <link rel="apple-touch-icon" sizes="512x512" href="https://b.top4top.io/p_32740fuzl1.png" />
    <meta name="theme-color" content="#000000" />
  </head>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
      <HeadContent />
      <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
