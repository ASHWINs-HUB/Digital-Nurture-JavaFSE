import React from "react";
import "./App.css";
import CohortDetails from "./CohortDetails";

function Cohort() {

  const cohortData = [
    {
      cohortCode: "INTADMDF10 .NET FSD",
      technology: ".NET FSD",
      startDate: "22-Feb-2022",
      currentStatus: "Ongoing",
      coachName: "Sathish",
      trainerName: "Ramesh"
    },
    {
      cohortCode: "ADM21JF014 Java FSD",
      technology: "Java FSD",
      startDate: "10-Sep-2021",
      currentStatus: "Completed",
      coachName: "Ravi",
      trainerName: "Kumar"
    },
    {
      cohortCode: "CDBJF21025 Java FSD",
      technology: "Java FSD",
      startDate: "24-Dec-2021",
      currentStatus: "Ongoing",
      coachName: "John",
      trainerName: "David"
    }
  ];

  return (
    <div>

      <h1>Cohorts Details</h1>

      <div className="container">

        {cohortData.map((cohort, index) => (
          <CohortDetails
            key={index}
            cohort={cohort}
          />
        ))}

      </div>

    </div>
  );
}

export default Cohort;