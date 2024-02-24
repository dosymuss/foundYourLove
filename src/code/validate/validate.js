import * as yup from "yup"

export const validateLogin = yup.object().shape({
    email:yup.string().email("Не валидный емаил").required("обязательно"),
    password:yup.string().min(5, "минимум 5").max(15, "максимум 15").required("обязательно")
})

export const validateEditProf = yup.object().shape({
    firstName: yup.string().max(15, "Не больше 15ти символов"),
    lastName: yup.string().max(15, "Не больше 15ти символов"),
    email: yup.string().email("должен быть емеил"),
})
