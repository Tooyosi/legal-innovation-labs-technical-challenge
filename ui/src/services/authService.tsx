import axios from "./apiAdapter";

export type LoginPayload = {
    email: string,
    password: string
}

export type SignupPayload = {
    firstName: string,
    lastName: string,
    email: string,
    password: string
  }
export const login = (data: LoginPayload) => axios.post(`auth/login`, data);

export const signup = (data: SignupPayload) => axios.post(`auth/signup`, data);
