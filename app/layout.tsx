import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Social Media Marketing',
  description: 'Learn how to use social media to promote tourism destinations',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
