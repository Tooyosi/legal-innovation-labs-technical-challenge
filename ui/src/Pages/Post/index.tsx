import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import PostView from 'components/commons/Post'
import Loader from 'components/Loader/Loader';
import { useFetchPost } from './Post.hooks';

const Post: React.FC<any> = () => {

    const {post} = useFetchPost()

    return (
        <Container>
            <Row>
                <Col md="12">
                    <div className="mt-3">
                        {post.loading ? <Loader /> :
                            <div>
                                <PostView
                                    {...post}
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