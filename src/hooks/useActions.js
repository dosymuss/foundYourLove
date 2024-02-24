import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { useMemo } from "react"
import { actions } from "../store/userSlice"
import { fetchLogin, fetchRegister, fetchUserById,fetchUserUpdate } from "../store/userSlice";
import { fetchUsersList, fetchDeleteUser } from "../store/usersSlice";

const rootActions = {
    actions, 
    fetchLogin,
    fetchRegister,
    fetchUserById,
    fetchUserUpdate,
    fetchUsersList, 
    fetchDeleteUser
}


// посмотри и поизучай про этот хук пж


export const useActions = () => {
    const dispatch = useDispatch()
    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}