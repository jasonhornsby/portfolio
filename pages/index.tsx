import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'

export default function Home() {
  return (
    <Layout home>
      <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello my name is jason. I am a developer from Dresden, Germany</p>
      </section>
      <secion>My first blog Post <Link href="/posts/first-post">go -></Link></secion>
      </>
      
    </Layout>
  )
}