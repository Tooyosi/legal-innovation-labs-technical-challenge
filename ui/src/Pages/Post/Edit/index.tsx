import Loader from 'components/Loader/Loader';
import { apiErrorHandler } from 'Helpers/utility';
import AuthLayout from 'layout/Auth/AuthLayout';
import { PostType } from 'Pages/Landing/LatestPosts';
import React from 'react'
import { toast } from 'react-toastify';
import { editPost } from 'services/postService';
import Form from '../Form/Form';
import { useFetchPost } from '../Post.hooks';

const EditPost = () => {
    const { post, id } = useFetchPost()

    const handleSubmit = async (values: PostType) => {
        try {
            let { data } = await editPost(id as string, values)
            toast.success(data.description)
        } catch (error) {
            apiErrorHandler(error)
        }
    }
    return (
        <AuthLayout>
            {post.loading ? <Loader /> :
                <>
                    <h3>Edit {post.title}</h3>
                    <Form onSubmit={handleSubmit} initialValues={{ title: post.title, body: post.body }} />
                </>
            }
        </AuthLayout>
    )
}

export default EditPost