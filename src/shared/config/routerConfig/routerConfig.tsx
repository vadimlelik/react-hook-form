import {RouteProps} from "react-router-dom";
import {MainPage} from "../../../pages/MainPage";
import {AboutPage} from "../../../pages/AboutPage";
import {AuthLayout} from "../../../pages/AuthLayout";

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    AUTH = 'auth'
}


export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "about",
    [AppRoutes.AUTH]: "auth",
}


export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RouterPath.main,
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: RouterPath.about,
        element: <AboutPage/>
    },
    [AppRoutes.AUTH]: {
        path: RouterPath.auth,
        element: <AuthLayout/>,
    }
}
