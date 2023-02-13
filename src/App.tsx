import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "./shared/lib/classNames";
import { AppRouter } from "./providers/router";
import { useEffect, useState } from "react";

function App() {
  const { theme, toggleTheme } = useTheme();
  const [error, setError] = useState(false);

  const handleError = () => {
    setError((prev) => !prev);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}> Edit Theme</button>

      <AppRouter />
      <button onClick={handleError}> Throw on Error </button>
    </div>
  );
}

export default App;
