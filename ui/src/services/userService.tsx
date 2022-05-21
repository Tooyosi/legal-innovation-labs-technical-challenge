import axios from "./apiAdapter";

export const getUser = () => axios.get(`/user`);
