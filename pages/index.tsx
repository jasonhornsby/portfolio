import Link from "next/link";
import Head from "next/head";
import Stripedlayout from "../components/layouts/striped";
import { getSortedPostsData, BlogData } from "../lib/posts";
import { AnimatePresence, motion } from "framer-motion";

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Jason's showcase</title>
      </Head>
      <Stripedlayout color="light">
        <div className="flex h-full flex-col justify-center items-start">
          <h1 className="text-5xl subpixel-antialiased">SHOWCASE</h1>
          <h2>Jason Hornsby</h2>
          <div className="h-20 flex flex-col justify-end">
            <Link href="projects">
              <button className="text-md cursor-pointer flex-initial bg-black rounded-md text-white pl-4 pr-4 pt-2 pb-2 font-medium">
                Projects
              </button>
            </Link>
          </div>
        </div>
      </Stripedlayout>
    </>
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
