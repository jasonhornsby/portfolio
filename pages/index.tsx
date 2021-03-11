import Link from "next/link";
import Head from "next/head";
import { getSortedPostsData, BlogData } from "../lib/posts";
import { AnimatePresence, motion } from "framer-motion";

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Jason's showcase</title>
      </Head>
      <AnimatePresence>
        <motion.div
          className="flex flex-row justify-center h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key="landing"
        >
          <div className="w-3 bg-black mr-2"></div>
          <div className="w-3 bg-black mr-4"></div>
          <div className="flex flex-col justify-center items-start h-full w-3/5">
            <h1 className="text-5xl subpixel-antialiased">SHOWCASE</h1>
            <h2>Jason Hornsby</h2>
            <div className="h-20 flex flex-col justify-end">
              <Link href="projects">
                <button
                  exit="exit"
                  className="text-md cursor-pointer flex-initial bg-black rounded-md text-white pl-4 pr-4 pt-2 pb-2 font-medium"
                >
                  Projects
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
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
