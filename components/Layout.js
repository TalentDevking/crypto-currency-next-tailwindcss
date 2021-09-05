import Head from "next/head";
import Link from "next/link";

export default function Layout({ children, page }) {
  return (
    <div className="bg-blue-50 pt-5 text-center min-h-screen">
      <Head>
        <title>{page}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="container-lg">
        <h1 className="text-5xl mb-2">CRYPTOCURRENCIES</h1>
        <div className="inline-grid grid-cols-2 gap-x-10 p-4">
          <Link href="/" passHref>
            <button className="bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300">
              Home
            </button>
          </Link>
          <Link href="/about" passHref>
            <button className="bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300">
              About
            </button>
          </Link>
        </div>
      </header>

      <main className="pt-4 mx-20">{children}</main>

      <style jsx>{`
        p {
          color: grey;
        }
      `}</style>
    </div>
  );
}