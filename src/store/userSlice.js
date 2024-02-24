import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { login, register, getUserById, updateUser } from "../api/userApi"
import { toastError, toastSucces } from "../ui/toast/toast"


export const fetchLogin = createAsyncThunk(
    "user/fetchLogin",
    async function (obj, { rejectWithValue }) {
        try {
            const res = await login(obj)
            if (res.status === 200) {
                return res.data;

                // Возвращаем данные пользователя в случае успешного входа
            } else {
                // В случае кода ответа 400 вызываем rejectWithValue с информацией об ошибке
                return rejectWithValue("Invalid credentials");
            }
        } catch (error) {
            return rejectWithValue("Ошибка данных")
        }
    }
)

export const fetchRegister = createAsyncThunk(
    "user/fetchRegister",
    async function (obj, { rejectWithValue }) {
        try {
            const res = await register(obj)
            if (res.status === 200) {
                console.log(res.data);
                localStorage.setItem("userId", res.data.id)
                return res.data
            } else {
                return rejectWithValue("Ошибка данных")
            }

        } catch (error) {
            return rejectWithValue("Ошибка данных")
        }
    }
)

export const fetchUserById = createAsyncThunk(
    "user/fetchUserById",
    async function (_, { rejectWithValue }) {
        try {
            const res = await getUserById()
            if (res.status === 200) {
                return res.data
            }
            else {
                return rejectWithValue("Что то не так😪")
            }
        } catch (error) {
            return rejectWithValue("Что то не так😪")
        }
    }
)

export const fetchUserUpdate = createAsyncThunk(
    "user/fetchUserUpdate",
    async function(obj, {rejectWithValue}){
        try {
            const res = await updateUser(obj)
            if(res.status === 200){
                return res
            }else{
                return rejectWithValue("Упс, не получилось")
            }
        } catch (error) {
            return rejectWithValue("Упс, не получилось")
        }
    }
)


const errorStatus = (state, action) => {
    state.status = "rejected";
    state.error = action.payload;
    state.user = null;
    toastError(action.payload)
}

const succesStatus = (state, action) => {
    state.status = "fulfilled";
    state.user = action.payload; // Устанавливаем данные пользователя из действия
    state.error = null;
    toastSucces()
}

const loadingStatus = state => {
    state.status = "loading";
}






const userSlice = createSlice({
    name: "user",
    initialState: {
        status: null,
        error: null,
        user: {}
    },
    reducers: {
        loginUser: (state, action) => {
            return {
                ...state,
                user: action.payload
            }
        },
    }
    ,
    extraReducers: builder => {
        builder
            .addCase(fetchLogin.pending, loadingStatus)
            .addCase(fetchLogin.fulfilled, succesStatus)
            .addCase(fetchLogin.rejected, errorStatus)
            .addCase(fetchRegister.pending, loadingStatus)
            .addCase(fetchRegister.fulfilled, succesStatus)
            .addCase(fetchRegister.rejected, errorStatus)
            .addCase(fetchUserById.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.user = action.payload
                state.error = null;
            })
            .addCase(fetchUserById.rejected, errorStatus)
            .addCase(fetchUserUpdate.pending, loadingStatus)
            .addCase(fetchUserUpdate.fulfilled, (state, action)=>{
                state.status = "fulfilled";
                state.user = action.payload; // Устанавливаем данные пользователя из действия
                state.error = null;
                toastSucces("Обновил бро")
            })
            .addCase(fetchUserUpdate.rejected, (state, action)=>{
                state.status = "rejected";
                state.error = action.payload;
                toastError(action.payload)
            })
    }
})



export const { actions, reducer } = userSlice