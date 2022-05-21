import axios from "./apiAdapter";

export type LoginPayload = {
    email: string,
    password: string
}
export const login = (data: LoginPayload) => axios.post(`auth/login`, data);