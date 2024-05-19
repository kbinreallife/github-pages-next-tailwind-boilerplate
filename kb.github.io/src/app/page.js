import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-darkgrey-100">
      <Head>
        <title>My Personal Website</title>
        <meta name="description" content="Welcome to my personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="text-center">
        <h1 className="text-4xl font-bold text-blue-500">My Name</h1>
        <p className="text-lg text-gray-700">My Title</p>
      </header>

      {/* Blurb */}
      <section className="mt-8 text-center">
        <p className="text-lg text-gray-600">
          Welcome to my personal website! I can edit this by going to my-project-title\src\app\page.js
        </p>
      </section>

      {/* Navigation */}
      <nav className="mt-8">
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
