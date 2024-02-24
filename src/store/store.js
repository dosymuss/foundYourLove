import { configureStore } from "@reduxjs/toolkit"
import { reducer as userReducer } from "./userSlice"
import { reducer as usersReducer } from "./usersSlice"
import { userApi } from "./QueryUserApi"


export default configureStore({
    reducer: {
        user: userReducer,
        users: usersReducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware)
})