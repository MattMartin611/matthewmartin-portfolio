import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Matthew Martin | Civil Engineering Portfolio",
  description: "Academic and personal Civil Engineering projects focusing on sustainability and creative solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 min-h-screen flex flex-col">
        {/* Navbar */}
        <header className="flex justify-between items-center px-8 py-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold tracking-tight">Matthew Martin</h1>
          <nav className="space-x-6">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/projects" className="hover:text-blue-600 transition-colors">Projects</Link>
            <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
          </nav>
        </header>

        {/* Page content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-100 text-gray-600 text-center py-6 mt-12">
          <p>© {new Date().getFullYear()} Matthew Martin</p>
        </footer>
      </body>
    </html>
  );
}
