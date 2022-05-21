import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPost } from "services/postService";

export const useFetchPost = () => {
    const [state, setState] = useState({
        loading: true,
        id: "",
        title: "",
        body: "",
        createdAt: "",
        updatedAt: "",
        user: {
            firstName: '',
            lastName: '',
            email: ''
        }
    })
    const { id } = useParams();


    const navigate = useNavigate();

    const handleGoBack = useCallback(() => navigate(-1), [navigate]);


    const fetchPost = useCallback(async () => {
        setState((prev) => ({
            ...prev,
            loading: true
        }))
        try {
            let { data: { data } } = await getPost(id as string)
            setState((prev) => ({
                ...prev,
                ...data,
                loading: false
            }))
        } catch (error) {
            handleGoBack()
        }
    }, [id, handleGoBack])


    useEffect(() => {
        fetchPost()
    }, [fetchPost])


    return { id: id, post: state, fetchPost: fetchPost, handleGoBack: handleGoBack }
}