import { Post } from "../interfaces/post";
import styles from "./HomePage.module.scss";

interface Props {
  posts: Post[];
}

const HomePage = ({ posts }: { posts: Post[] }) => {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>I love building beautiful and user friendly websites and apps</p>
          {posts && (
            <ul>
              {posts.map(({ slug, title }) => (
                <li key={slug}>{title}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
