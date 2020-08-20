import React from "react";
import "./App.css";

import Navigation from "./components/Navigation";
import UserImages from "./components/UserImages";
import Suggestions from "./components/Suggestions";
// import ImageSection from './components/ImageSection';

function App(props) {
  console.log("App props", props);
  return (
    <div>
      <Navigation />
      <div className="App">
        <Suggestions />
        <UserImages />
      </div>
    </div>
  );
}

export default App;
