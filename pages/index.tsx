import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import Date from "../components/date";
import { getSortedPostsData, BlogData } from "../lib/posts";
import BlogPreview from "../components/blog-preview";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <>
        <Head>
          <title className="rotate-90">{siteTitle}</title>
        </Head>
        <section className="shadow-lg rounded-lg p-4 mt-2">
          <p className="text-grey-500 subpixel-antialiased">
            Hello my name is jason. I am a developer from Dresden, Germany
          </p>
        </section>
        <h2 className="mt-4 mb-4">My blog posts:</h2>

        {allPostsData.map(({ id, title, date }: BlogData) => (
          <BlogPreview id={id} title={title} date={date} key={id} />
        ))}
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
