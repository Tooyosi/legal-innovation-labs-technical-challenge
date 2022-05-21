import Loader from 'components/Loader/Loader';
import { apiErrorHandler } from 'Helpers/utility';
import { PostType } from 'Pages/Landing/LatestPosts';
import React from 'react'
import { toast } from 'react-toastify';
import { Col, Container, Row } from 'reactstrap';
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
        <Container>
            <Row>
                <Col md="6" className='m-auto'>
                    {post.loading ? <Loader /> :
                        <>
                            <h3>Edit {post.title}</h3>
                            <Form onSubmit={handleSubmit} initialValues={{ title: post.title, body: post.body }} />
                        </>
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default EditPost