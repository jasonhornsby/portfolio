import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import Date from "../components/date";
import { getSortedPostsData, BlogData } from "../lib/posts";
import utilStyles from "../styles/utils.module.scss";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Hello my name is jason. I am a developer from Dresden, Germany</p>
        </section>
        <ul>
          {allPostsData.map(({ title, id, date }: BlogData) => (
            <li key={id}>
              <span>{title}</span> <Date dateString={date}></Date>
              <Link href={"/posts/" + id}>Visit</Link>
            </li>
          ))}
        </ul>
      </>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
