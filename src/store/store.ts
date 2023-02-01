import {Action, combineReducers, configureStore, ThunkAction} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import userReducer from "./usersSlice";


const rootReducer = combineReducers({
    users: userReducer
})


export function createStore() {
    return configureStore({
        reducer: rootReducer,
        devTools: true
    })
}


export type RootState = ReturnType<typeof rootReducer>
export type Appstore = ReturnType<typeof createStore>
export type AppDispatch = Appstore['dispatch']
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type  AppThunk = ThunkAction<Promise<any>, RootState, unknown, Action>