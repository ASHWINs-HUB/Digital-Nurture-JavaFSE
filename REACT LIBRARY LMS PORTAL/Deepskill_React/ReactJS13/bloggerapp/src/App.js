import React from "react";
import "./App.css";

import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

import { books, blogs, courses } from "./Components/Data";

function App() {

  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  return (

    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-start",
        marginTop: "40px"
      }}
    >

      {showCourses && (
        <div
          style={{
            borderRight: "3px solid green",
            paddingRight: "40px"
          }}
        >
          <CourseDetails courses={courses} />
        </div>
      )}

      {showBooks && (
        <div
          style={{
            borderRight: "3px solid green",
            padding: "0 40px"
          }}
        >
          <BookDetails books={books} />
        </div>
      )}

      {showBlogs && (
        <div style={{ paddingLeft: "40px" }}>
          <BlogDetails blogs={blogs} />
        </div>
      )}

    </div>

  );
}

export default App;