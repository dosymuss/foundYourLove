import { userApi } from "./QueryUserApi";


export const userApiCont = userApi.injectEndpoints({
    endpoints: (build) => ({
        getAllUser: build.query({
            query: () => "users/"
        }),
        registerUser: build.mutation({
            query: (obj) => ({
                url: "register/",
                body: obj,
                method: "POST"
            })
        }),
        loginUser: build.mutation({
            query: (obj)=>({
                url:"login/",
                body: obj,
                method: "POST"
            })
        }),
        updateUser: build.mutation({
            query: ({id, ...obj})=>({
                url:`users/${id}`,
                body: obj,
                method: "PUT"
            })
        })
        
    })
})


export const { useGetAllUserQuery, useRegisterUserMutation, useLoginUserMutation, useUpdateUserMutation } = userApiCont