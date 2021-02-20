import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I am a designer with vast experience in Ui/Ux design and web development solutions. I have found a more successful way of telling stories and making companies successful using art and technology. Im workig on my portfolio at the moment, stay tuned.
         </p>
      </section>
    </Layout>
  )
}

