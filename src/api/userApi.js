import axios from "axios"


const instance = axios.create({
    baseURL: "https://reqres.in/api/"
})

// {
//     "email": "eve.holt@reqres.in",
//     "password": "pistol"
// }


export const register = async (obj) => {
    try {
        const res = await instance.post("register/", obj)
        return res
    } catch (error) {
        throw error
    }
}

export const getUserById = async () => {
    try {
        const id = localStorage.getItem("userId")
        const res = await instance.get(`users/${id}`)
        return res
    } catch (error) {
        throw error
    }
}

export const login = async (obj) => {
    try {
        const res = await instance.post("login/", obj)
        return res
    } catch (error) {
        throw error
    }
}

export const updateUser = async (obj) => {
    try {
        const id = localStorage.getItem("userId")
        const res = instance.patch(`users/${id}`, obj)
        return res

    } catch (error) {
        throw error
    }
}

export const getUsers = async () => {
    try {
        const res = await instance.get("users/")
        return res
    } catch (error) {
        throw error
    }
}

export const deleteUser = async (id) => {
    try {
        const res = await instance.delete(`users/${id}`)
        return res
    } catch (error) {
        throw error
    }
}