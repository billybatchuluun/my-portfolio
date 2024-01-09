import React from "react";
import { useState } from "react";

export const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="w-3/4 py-4 px-20 items-center m-auto">
      <div className={isDarkMode ? "dark-mode" : "light-mode"}>
        <label>
          Dark Mode
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleDarkMode}
          ></input>
        </label>
      </div>
    </div>
  );
};
