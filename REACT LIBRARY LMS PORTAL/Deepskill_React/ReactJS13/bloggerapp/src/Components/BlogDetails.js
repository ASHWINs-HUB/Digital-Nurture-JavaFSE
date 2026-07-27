import React from "react";

function BlogDetails(props) {

  return (
    <div>

      <h1>Blog Details</h1>

      <ul style={{ listStyleType: "none", padding: 0 }}>

        {props.blogs.map((blog) => (

          <li key={blog.id}>

            <h2>{blog.title}</h2>

            <h4>{blog.author}</h4>

            <p>{blog.description}</p>

          </li>

        ))}

      </ul>

    </div>
  );
}

export default BlogDetails;