import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function DarkModeToggler() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const DarkModeToggler = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  return (
    <div className="m-16 flex flex-col items-center">
      <DarkModeSwitch checked={darkSide} onChange={DarkModeToggler} size={56} />
      <h3 className="text=grey-800 dark:text-gray-300 pt-4">
        {colorTheme === "light" ? "Dark mode" : "Light mode"}
      </h3>
    </div>
  );
}

export default DarkModeToggler;
