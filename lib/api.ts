import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Post } from "../interfaces/post";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const fullPath = join(postsDirectory, slug);
  const realSlug = slug.replace(/\.md$/, "");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const {
    data: { title, excerpt, date },
    content,
  } = matter(fileContents);

  const post: Post = {
    date,
    title,
    excerpt,
    content,
    slug: realSlug,
  };

  return post;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts: Post[] = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
