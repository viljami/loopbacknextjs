import Head from 'next/head';
import Link from 'next/link';

function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Welcome to Next.js!</h1>
      <p>
        Click{' '}
        <Link href="/ua">
          <a>here</a>
        </Link>{' '}
        to read more
      </p>
      <Link href="/post?slug=something" as="/post/something">
        <a>Post</a>
      </Link>{' '}
    </div>
  );
}

export default Home;
