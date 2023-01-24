import type { NextPage } from "next";
import Head from "next/head";
import { Post } from "@interfaces/post";
import { getAllPosts, getPostBySlug } from "@lib/api";
import Header from "@components/Header";
import Footer from "@components/Footer";
import PostPage from "@components/PostPage";
import markdownToHtml from "@lib/markdownToHtml";

interface Props {
  post: Post;
}

const SinglePost: NextPage<Props> = ({ post }) => {
  return (
    <>
      <Head>
        <title>George Smerin</title>
        <meta name="description" content="Frontend development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PostPage post={post} />
      <Footer />
    </>
  );
};

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug);

  const htmlContent = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content: htmlContent,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default SinglePost;
