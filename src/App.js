import React from "react";
import "./App.css";

import Navigation from "./components/Navigation";
import UserImages from "./components/UserImages";
// import ImageSection from './components/ImageSection';

function App() {
  return (
    <div>
      <Navigation />
      <div className="App">
        <UserImages />
      </div>
    </div>
  );
}

export default App;
