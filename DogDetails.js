// DogDetails.js
import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function DogDetails({ dogs }) {
  const { dogName } = useParams();
  const currentDog = dogs.find(
    (dog) => dog.name.toLowerCase() === dogName.toLowerCase()
  );

  if (!currentDog) {
    return <Navigate to="/dogs" />;
  }

  return (
    <div className="dogDetails">
      <h2>{currentDog.name}</h2>
      <img src={`/${currentDog.src}.jpg`} alt={currentDog.name} />
      <p>Age: {currentDog.age} years</p>
      <h3>Facts:</h3>
      <ul>
        {currentDog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
      <Link to="/" style={{ color: "red" }}>
        Go Home
      </Link>
    </div>
  );
}

export default DogDetails;
