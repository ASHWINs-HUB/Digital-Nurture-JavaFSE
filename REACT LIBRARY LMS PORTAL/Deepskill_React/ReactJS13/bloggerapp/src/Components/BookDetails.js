import React from "react";

function BookDetails(props) {

  return (
    <div>

      <h1>Book Details</h1>

      <ul style={{ listStyleType: "none", padding: 0 }}>

        {props.books.map((book) => (

          <li key={book.id}>

            <h3>{book.bname}</h3>

            <h4>{book.price}</h4>

          </li>

        ))}

      </ul>

    </div>
  );
}

export default BookDetails;