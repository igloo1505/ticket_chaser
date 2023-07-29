import bcryptjs from 'bcrypt'

export const encryptPassword = async (pw: string) => {
    const salt = await bcryptjs.genSalt(10)
    const hashed = await bcryptjs.hash(pw, salt)
    return hashed
}

