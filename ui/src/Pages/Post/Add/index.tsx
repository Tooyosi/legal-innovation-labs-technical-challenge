import { apiErrorHandler } from 'Helpers/utility';
import { PostType } from 'Pages/Landing/LatestPosts';
import React from 'react'
import { toast } from 'react-toastify';
import { Col, Container, Row } from 'reactstrap';
import { addPost } from 'services/postService';
import Form from '../Form/Form';

const AddPost = () => {

    const handleSubmit = async (values: PostType, {resetForm}:any) => {
        try {
            let { data } = await addPost(values)
            resetForm({})
            toast.success(data.description)
        } catch (error) {
            apiErrorHandler(error)
        }
    }
    
    return (
        <Container>
            <Row>
                <Col md="6" className='m-auto'>
                    <h3>Add Blog Post</h3>
                    <Form
                        onSubmit={handleSubmit} />

                </Col>
            </Row>
        </Container>
    )
}

export default AddPost