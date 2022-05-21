import React, { useCallback, useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import PostView from 'components/commons/Post'
import { useNavigate, useParams } from 'react-router-dom';
import { getPost } from 'services/postService';
import Loader from 'components/Loader/Loader';

const Post: React.FC<any> = () => {
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
        try {
            let { data: { data } } = await getPost((id as string))
            setState((prev) => ({
                ...prev,
                ...data,
                loading: false
            }))
        } catch (error) {
            handleGoBack()
        }
    }, [id, handleGoBack])


    useEffect(()=>{
        fetchPost()
    }, [fetchPost])
    return (
        <Container>
            <Row>
                <Col md="12">
                    <div className="mt-3">
                    {state.loading? <Loader />:
                        <div>
                            <PostView
                            title={state.title}
                            createdAt={state.createdAt}
                            body={state.body}
                            user={state.user}
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