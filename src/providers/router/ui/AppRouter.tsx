import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {routerConfig} from "../../../shared/config/routerConfig/routerConfig";


const AppRouter = () => {
    return (<Suspense fallback={<div>...Loading</div>}>
        <Routes>
            {Object.values(routerConfig).map(({element, path}) => (
                <Route element={element} path={path}/>
            ))}
        </Routes>
    </Suspense>)
}


export default AppRouter