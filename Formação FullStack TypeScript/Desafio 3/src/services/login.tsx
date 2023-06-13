import { api } from "../api"

export const login = async ({
    email,
    password,
}: {
    email: string,
    password: string 
}): Promise<boolean> => {
    const data: any = await api

    return email === data.email 
            && password === data.password
}
