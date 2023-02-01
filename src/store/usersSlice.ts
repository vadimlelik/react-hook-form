import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IUser} from "../types/user";
import {AppThunk} from "./store";
import axios from "axios";


// export const loadUsers =  createAsyncThunk<{data:IUser[],undefiend,{}}>({})

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
            }
        }
    }
)
const {actions, reducer: userReducer} = usersSlice
const {usersReceived, userRequested} = actions

export const loadUsersList = (): AppThunk => async (dispatch, getState) => {
    dispatch(userRequested)
    try {
        const {data}: any = await axios("https://jsonplaceholder.typicode.com/users")
        dispatch(usersReceived(data))

    } catch (e) {

    }
}

export default userReducer