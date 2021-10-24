import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'


export default function Home() {
  const router = useRouter()
  const href = 'https://calendly.com/andrewrobles/pythontutoring'

  useEffect(() => {
    router.push(href)
  })

  const title = "Andrew\'s Tutoring"
  
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to {title}!
        </h1>

        <p className={styles.description}>
          You will be redirected in just a second
        </p>

      </main>
    </div>
  )
}
