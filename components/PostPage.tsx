import { Post } from "@interfaces/post";
import styles from "./PostPage.module.scss";

interface Props {
  post: Post;
}

const PostPage = ({ post }: Props) => {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>{post.title}</h1>
          <div
            className={styles.post}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </main>
  );
};

export default PostPage;
