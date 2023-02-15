import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "./shared/lib/classNames";
import { AppRouter } from "./providers/router";
import ButtonIcon from "./component/ButtonIcon/ButtonIcon";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}> Edit Theme</button>
      <ButtonIcon icon="up" />

      <AppRouter />
    </div>
  );
}

export default App;
