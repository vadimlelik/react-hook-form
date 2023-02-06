import './styles/index.scss'
import {useTheme} from "./providers/ThemeProvider";
import {classNames} from "./shared/lib/classNames";
import {AppRouter} from "./providers/router";

function App() {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}> Edite Theme</button>

            <AppRouter/>
        </div>

    )
}

export default App
