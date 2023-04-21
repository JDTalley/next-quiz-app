import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { modules } from '../data'
import Module from '../components/module'

export const getStaticProps = async () => {
  return {
    props: {
      modulesList: modules
    }
  }
}

export default function Home({ modulesList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Quiz App</title>
        <meta name="description" content="Quiz App created with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Module key={modulesList[1].id} {...modulesList[1]} />
      </main>

      <footer className={styles.footer}>
        <p>Dakota Talley</p>
      </footer>
    </div>
  )
}
