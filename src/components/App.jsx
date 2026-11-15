import React from "react";
import blogData from "../data/blog";
import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";

console.log(blogData);

function App() {
  const posts = [
    {
      id: 1,
      title: "My Journey into Web Development",
      date: "November 15, 2026",
      preview:
        "Learning HTML, CSS, JavaScript, and React has opened many opportunities for me."
    },
    {
      id: 2,
      title: "Why I Love React",
      date: "November 10, 2026",
      preview:
        "React makes it easy to build reusable and interactive user interfaces."
    },
    {
      id: 3,
      title: "Building My First Blog",
      date: "November 5, 2026",
      preview:
        "Creating a personal blog is a great way to share ideas and showcase projects."
    }
  ];

  return (
    <div className="App">
      <Header name="Rane's Personal Blog" />

      <About
        image="https://via.placeholder.com/150"
        about="Welcome to my personal blog where I share my learning journey in software development and technology."
      />

      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
