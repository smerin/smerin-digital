import type { NextPage } from "next";
import Head from "next/head";
import { Post } from "@interfaces/post";
import { getAllPosts } from "@lib/api";
import Header from "@components/Header";
import Footer from "@components/Footer";
import HomePage from "@components/HomePage";

interface Props {
  posts: Post[];
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>George Smerin</title>
        <meta name="description" content="Frontend development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HomePage posts={posts} />
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const posts = getAllPosts();
  return {
    props: { posts },
  };
};

export default Home;
