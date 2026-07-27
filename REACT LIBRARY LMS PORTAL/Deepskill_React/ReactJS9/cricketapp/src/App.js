import React from "react";
import "./App.css";

function App() {

  const officeImage =
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600";

  const office = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };

  const officeList = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai"
    },
    {
      Name: "Regus",
      Rent: 75000,
      Address: "Bangalore"
    },
    {
      Name: "WeWork",
      Rent: 90000,
      Address: "Hyderabad"
    }
  ];

  return (
    <div style={{ marginLeft: "40px" }}>

      <h1>Office Space , at Affordable Range</h1>

      <img
        src={officeImage}
        alt="Office Space"
        width="25%"
        height="25%"
      />

      <h2>Name: {office.Name}</h2>

      <h3
        style={{
          color: office.Rent <= 60000 ? "red" : "green"
        }}
      >
        Rent Rs. {office.Rent}
      </h3>

      <h3>Address: {office.Address}</h3>

      <hr />

      <h2>Available Office Spaces</h2>

      {officeList.map((item, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>

          <h3>Name: {item.Name}</h3>

          <h3
            style={{
              color: item.Rent <= 60000 ? "red" : "green"
            }}
          >
            Rent Rs. {item.Rent}
          </h3>

          <h3>Address: {item.Address}</h3>

          <hr />

        </div>
      ))}

    </div>
  );
}

export default App;