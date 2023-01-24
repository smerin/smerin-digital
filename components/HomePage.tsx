import { Post } from "@interfaces/post";
import styles from "./HomePage.module.scss";

interface Props {
  posts: Post[];
}

const HomePage = ({ posts }: Props) => {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>I love building beautiful and user friendly websites and apps</p>
          {posts && (
            <div className={styles.posts}>
              <h2>Latest posts</h2>
              {posts.map(({ slug, title, excerpt }) => (
                <article key={slug} className={styles.post}>
                  <h3>
                    <a href={`/posts/${slug}`}>{title}</a>
                  </h3>
                  <p>{excerpt}</p>
                  <a href={`/posts/${slug}`}>Read more &rarr;</a>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
