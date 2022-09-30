import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Resume Builder</h1>
        <Link href="/edit">
          <button className={styles.btn}>Edit</button>
        </Link>
        <Link href="/preview">
          <button className={styles.btn}>Preview</button>
        </Link>
      </main>
    </div>
  )
}
