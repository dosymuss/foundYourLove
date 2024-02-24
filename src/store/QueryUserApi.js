import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const userApi = createApi({
    reducerPath:"userApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://reqres.in/api/"}),
    endpoints: (build)=>({
        getUserById: build.query({
            query: (id)=>`users/${id}`,
        })
        
    })

})

export const {useGetUserByIdQuery}  = userApi