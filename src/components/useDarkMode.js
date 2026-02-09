import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("dark-mode");
    return saved === "true" ? true : false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      dark === true ? true : false
    );
    localStorage.setItem("dark-mode", dark);
  }, [dark]);

  return { dark, setDark };
};
