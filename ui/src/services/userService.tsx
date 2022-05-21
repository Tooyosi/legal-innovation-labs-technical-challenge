import axios from "./apiAdapter";

export const getUser = () => axios.get(`/user`);

export const handleLogout = ()=>{
    localStorage.clear()
    window.location.href = "/";
}