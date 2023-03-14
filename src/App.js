import React from "react";
import Home from "./Components/Home";
import "./App.css";
import "./Components/Home.css";

import { useState } from "react";

import "./Components/Home.css";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleDark = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "App" : "App2"}>
      <Home handleDark={handleDark} isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
