import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import PostView from 'components/commons/Post'
import Loader from 'components/Loader/Loader';
import { useFetchPost } from './Post.hooks';
import { deletePost } from 'services/postService';
import { toast } from 'react-toastify';
import { apiErrorHandler } from 'Helpers/utility';

const Post: React.FC<any> = () => {

    const { post, id, handleGoBack } = useFetchPost();

    const handleDelete = async () => {
        try {
            let { data } = await deletePost(id as string);
            toast.success(data.description);
            setTimeout(handleGoBack, 5)
        } catch (error) {
            apiErrorHandler(error);
        }
    }

    return (
        <Container>
            <Row>
                <Col md="12">
                    <div className="mt-3">
                        {post.loading ? <Loader /> :
                            <div>
                                <PostView
                                    {...post}
                                    handleDelete={handleDelete}
                                />
                                <p className="text-right"></p>
                            </div>
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Post;