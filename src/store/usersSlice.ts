import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IUser} from "../types/user";
import {AppThunk, RootState} from "./store";
import axios from "axios";


type Status = "idle" | "loading" | "rejected" | "received";

interface IInitialState {
    status: Status;
    error: string | null
    list: IUser[]
}

const initialState: IInitialState = {
    status: "idle",
    error: null,
    list: [],

}
const usersSlice = createSlice({
        name: 'Users',
        initialState,
        reducers: {
            userRequested: (state) => {
                state.status = 'loading'
            },
            usersReceived: (state, action) => {
                console.log(action.payload)
                state.list = action.payload
                state.status = 'received'
            },
            usersError: (state, action) => {
                console.log(action.payload)
                state.error = action.payload.message
            }

        }
    }
)
const {actions, reducer: userReducer} = usersSlice
const {usersReceived, userRequested, usersError} = actions

export const loadUsersList = (): AppThunk => async (dispatch, getState) => {
    dispatch(userRequested)
    try {
        const {data} = await axios<IUser[]>("https://jsonplaceholder.typicode.com/users")
        dispatch(usersReceived(data))

    } catch (e) {
        dispatch(usersError(e))
    }
}

export const getUsers = () => (state: RootState) => state.users.list
export default userReducer
