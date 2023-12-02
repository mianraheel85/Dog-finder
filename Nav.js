// Nav.js
import React from "react";
import { NavLink } from "react-router-dom";

function Nav({ dogs }) {
  return (
    <nav>
      {/* Home link */}
      <NavLink to="/dogs">Home</NavLink>

      {/* Dog links */}
      {dogs?.map((dog) => (
        <NavLink key={dog.name} to={`/dogs/${dog.name}`}>
          {dog.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default Nav;
