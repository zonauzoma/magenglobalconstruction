import Link from "next/link";
import Head from "next/head";

export default function Layout({ children, title, description }) {
  return (
    <div className="font-sans text-gray-800 min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-xl font-bold text-blue-700">MAGËN Global Construction</h1>
          <nav className="space-x-6">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="pt-20 flex-grow">{children}</main>

      <footer className="bg-blue-700 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} MAGËN Global Construction. All rights reserved.</p>
      </footer>
    </div>
  );
}