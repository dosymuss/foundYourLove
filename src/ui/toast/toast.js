import { toast, Bounce } from "react-toastify"

export const toastError = (text) => {
    toast.error(`Ooops, Косяк : ${text}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
    })
}

export const toastSucces = (text = "Юхууу, все отлично бро 😎") => {
    toast.success(text, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,

    })

}