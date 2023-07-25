import { LoginBaseType } from "#/types/AuthTypes";


const login = async (data: LoginBaseType) => {
    // let res = await axios
}

export const loginUser = async (data: LoginBaseType) => {
    // TODO: Resume by handling this
    console.log("data: ", data)
}

export const loginAdmin = async (data: LoginBaseType) => {
    const res = await loginUser(data)
    // if(!res.data.success)
    // TODO: Resume by handling this
    console.log("data: ", data)
}


