import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers, deleteUser } from "../api/userApi";
import { toastSucces, toastError } from "../ui/toast/toast"


export const fetchUsersList = createAsyncThunk(
    'users/fetchUsersList',
    async function (_, { rejectWithValue }) {
        try {
            const res = await getUsers()
            if (res.status === 200) {
                return res
            } else {
                return rejectWithValue("Проблемки вышли")
            }
        } catch (error) {
            return rejectWithValue("Проблемки вышли")
        }
    }
)


export const fetchDeleteUser = createAsyncThunk(
    "users/fetchDeleteUser",
    async function (id, { rejectWithValue, dispatch }) {
        try {
            const res = await deleteUser(id)
            if (res.status === 204) {
                dispatch(deleteUserReducer({id}))
                return res
            }
            else {
                return rejectWithValue("Не получилось тыртак")
            }

        } catch (error) {
            return rejectWithValue("Не получилось тыртак")
        }
    }
)

const loadStat = (state, action) => {
    state.status = "loading"
}



const usersSlice = createSlice({
    name: "users",
    initialState: {
        status: null,
        error: null,
        users: []
    },
    reducers: {
        deleteUserReducer: (state, action) => {
            return {
                ...state,
                users: state.users.filter(item => item.id !== action.payload.id)
            }
        } 
},
    extraReducers: builder => {
        builder
            .addCase(fetchUsersList.pending, loadStat)
            .addCase(fetchUsersList.fulfilled, (state, action) => {
                state.status = "fulfilled",
                    state.users = action.payload.data.data,
                    state.error = null
            })
            .addCase(fetchUsersList.rejected, (state, action) => {
                state.status = "rejected",
                    state.users = null,
                    state.error = action.payload
            })
            .addCase(fetchDeleteUser.pending, loadStat)
            .addCase(fetchDeleteUser.fulfilled, (state, action) => {
                state.status = "fulfilled",
                    state.error = null,
                    toastSucces()
            })
            .addCase(fetchDeleteUser.rejected, (state, action) => {
                state.status = "rejected",
                    state.error = action.payload,
                    toastError()
            })

    }
})

export const {deleteUserReducer} = usersSlice.actions

export const { actions, reducer } = usersSlice