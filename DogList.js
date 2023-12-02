// DogList.js
import React from "react";
import { Link } from "react-router-dom";

function DogList({ dogs }) {
  return (
    <div>
      <h2>Choose a dog:</h2>
      <ul className="dogList">
        {dogs?.map((dog) => (
          <li key={dog.name}>
            <Link to={`/dogs/${dog.name.toLowerCase()}`}>
              <img src={`/${dog.src}.jpg`} alt={dog.name} />
              <p style={{ color: "red" }}>{dog.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DogList;
