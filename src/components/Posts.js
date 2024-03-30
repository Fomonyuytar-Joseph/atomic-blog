import List from "./List";
import { usePosts} from "../PostContext";

export default function Posts() {
    const {posts}= usePosts();
  return (
    <section>
      <List posts={posts} />
    </section>
  );
}
