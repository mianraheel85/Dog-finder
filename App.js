// App.js
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import axios from "axios";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import Nav from "./Nav"; // Import the Nav component

function App() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    async function fetchDogs() {
      try {
        const response = await axios.get("http://localhost:5001/dogs");
        // console.log(response.data);
        setDogs(response.data);
      } catch (error) {
        console.error("Error fetching dogs:", error.message);
      }
    }

    fetchDogs();
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Include the Nav component */}
        <Nav dogs={dogs} />

        <Routes>
          {/* Homepage */}
          <Route path="dogs" element={<DogList dogs={dogs} />} />

          {/* Dog details */}
          <Route path="dogs/:dogName" element={<DogDetails dogs={dogs} />} />

          {/* Redirect to homepage for unknown routes */}
          <Route path="*" element={<Navigate to="/dogs" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
