import React from "react";

function CourseDetails(props) {

  return (
    <div>

      <h1>Course Details</h1>

      <ul style={{ listStyleType: "none", padding: 0 }}>

        {props.courses.map((course) => (

          <li key={course.id}>

            <h2>{course.cname}</h2>

            <h4>{course.date}</h4>

          </li>

        ))}

      </ul>

    </div>
  );
}

export default CourseDetails;