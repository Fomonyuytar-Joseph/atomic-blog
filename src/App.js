import { createContext, useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Header from "./components/Header";
import Archive from "./components/Archive";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {PostProvider ,PostContext} from "./PostContext";

export function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

// 1) create a new context

function App() {
  const [isFakeDark, setIsFakeDark] = useState(false);


  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return (
    // 2) provide a value to the child components
      <PostProvider>
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
      </PostProvider>

  );
}



export default App;
