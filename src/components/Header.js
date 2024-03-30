import Results from "./Results";
import SearchPosts from "./SearchPosts";
import {usePosts} from "../PostContext";

export default function Header() {

  // 3) consuming the context
  const {onClearPosts, searchQuery, setSearchQuery ,posts} = usePosts();

  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results  />
        <SearchPosts
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}
