import { PostType } from "Pages/Landing/LatestPosts";
import axios from "./apiAdapter";

export const getPosts = (limit: number, offset: number, addedParams?: any) => axios.get(`/post?limit=${limit}&offset=${offset}${addedParams ? addedParams : ''}`);

export const getPost = (id:string) => axios.get(`/post/${id}`);

export const editPost = (id:string, data: PostType) => axios.patch(`/post/${id}`, data);

export const addPost = (data: PostType) => axios.post(`/post`, data);

export const deletePost = (id:string) => axios.delete(`/post/${id}`);