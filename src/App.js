import React from "react";
import "./App.css";

import Navigation from "./components/Navigation";
import UserImages from "./components/UserImages";
import Suggestions from "./components/Suggestions";
// import ImageSection from './components/ImageSection';

// import Test from "./components/Test"

function App() {
  return (
    <div>
      <Navigation />
      <div className="App">
        <Suggestions />
        <UserImages to="Sunny" from="Eralp" />
      </div>
    </div>
  );
}

export default App;
