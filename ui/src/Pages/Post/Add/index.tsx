import { apiErrorHandler } from 'Helpers/utility';
import AuthLayout from 'layout/Auth/AuthLayout';
import { PostType } from 'Pages/Landing/LatestPosts';
import React from 'react'
import { toast } from 'react-toastify';
import { addPost } from 'services/postService';
import Form from '../Form/Form';

const AddPost = () => {

    const handleSubmit = async (values: PostType, { resetForm }: any) => {
        try {
            let { data } = await addPost(values)
            resetForm({})
            toast.success(data.description)
        } catch (error) {
            apiErrorHandler(error)
        }
    }

    return (
        <AuthLayout>
            <h3>Add Blog Post</h3>
            <Form
                onSubmit={handleSubmit} />
        </AuthLayout>
    )
}

export default AddPost