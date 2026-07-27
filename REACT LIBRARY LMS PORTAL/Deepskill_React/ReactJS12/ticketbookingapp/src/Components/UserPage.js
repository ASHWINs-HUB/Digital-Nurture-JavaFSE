import React from "react";

function UserPage() {
  return (
    <div>
      <h1>Welcome back</h1>

      <h2>Book Your Ticket</h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI101</td>
            <td>Chennai</td>
            <td>Delhi</td>
            <td>10:00 AM</td>
          </tr>

          <tr>
            <td>AI202</td>
            <td>Hyderabad</td>
            <td>Mumbai</td>
            <td>2:30 PM</td>
          </tr>
        </tbody>
      </table>

      <br />

      <button>Book Ticket</button>
    </div>
  );
}

export default UserPage;