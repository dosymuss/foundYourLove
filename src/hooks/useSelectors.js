import { useSelector } from "react-redux"

export const useUser = () => {
    const user = useSelector(state => state.user)
    return user
}

export const useUsersList = ()=>{
    const users = useSelector(state=>state.users)
    return users
}
