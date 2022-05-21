import axios from "./apiAdapter";

export const getPosts = (limit: number, offset: number, addedParams?: any) => axios.get(`/post?limit=${limit}&offset=${offset}${addedParams ? addedParams : ''}`);

export const getPost = (id:string) => axios.get(`/post/${id}`);

