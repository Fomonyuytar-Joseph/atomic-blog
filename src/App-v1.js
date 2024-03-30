import { createContext, useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Header from "./components/Header";
import Archive from "./components/Archive";
import Main from "./components/Main";
import Footer from "./components/Footer";


export function createRandomPost() {
    return {
        title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
        body: faker.hacker.phrase(),
    };
}

// 1) create a new context
export const PostContext = createContext()

function App() {
    const [posts, setPosts] = useState(() =>
        Array.from({ length: 30 }, () => createRandomPost())
    );
    const [searchQuery, setSearchQuery] = useState("");
    const [isFakeDark, setIsFakeDark] = useState(false);

    // Derived state. These are the posts that will actually be displayed
    const searchedPosts =
        searchQuery.length > 0
            ? posts.filter((post) =>
                `${post.title} ${post.body}`
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
            )
            : posts;

    function handleAddPost(post) {
        setPosts((posts) => [post, ...posts]);
    }

    function handleClearPosts() {
        setPosts([]);
    }

    // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
    useEffect(
        function () {
            document.documentElement.classList.toggle("fake-dark-mode");
        },
        [isFakeDark]
    );

    return (
        // 2) provide a value to the child components
        <PostContext.Provider  value={{posts:searchedPosts ,onClearPosts:handleClearPosts,onAddPost:handleAddPost ,searchQuery,setSearchQuery}}>
            <section>
                <button
                    onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
                    className="btn-fake-dark-mode"
                >
                    {isFakeDark ? "☀️" : "🌙"}
                </button>

                <Header
                />
                <Main  />
                <Archive  />
                <Footer />
            </section>
        </PostContext.Provider>
    );
}



export default App;