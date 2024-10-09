import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from '../components/Navbar';
import type { Metadata } from "next";

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "Nusa Cipta",
  description: "Learn how to use social media to promote tourism destinations",
  icons: "/icon-512x512.png",
};

const HeadContent = () => (
  <head>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="apple-touch-icon" sizes="192x192" href="/icon-192x192.png" />
    <link rel="apple-touch-icon" sizes="512x512" href="/icon-512x512.png" />
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
      </body>
    </html>
  );
}
