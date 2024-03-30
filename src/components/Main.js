
import FormAddPost from "./FormAddPost";
import {usePosts} from "../PostContext";
import Posts from "./Posts";
export default function Main() {
    const {onAddPost ,posts} = usePosts()
  return (
    <main>
      <FormAddPost onAddPost={onAddPost} />
      <Posts posts={posts} />
    </main>
  );
}
