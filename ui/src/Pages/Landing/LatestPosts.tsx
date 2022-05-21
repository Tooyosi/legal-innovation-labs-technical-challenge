import Post from 'components/commons/Post'
import { UserType } from 'contexts/Auth/AuthContext'
import { apiErrorHandler, handleTextLength } from 'Helpers/utility'
import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Col, Container, Row } from 'reactstrap'
import { deletePost } from 'services/postService'

export type PostType = {
    id?: number | string,
    title: string,
    body: string,
    createdAt?: string,
    updatedAt?: string,
    userId?: string,
    user?: UserType
}
const LatestPosts: React.FC<any> = ({ data, getAllPosts }) => {

    const handleDelete = async (id: string) => {
        try {
            let {data} = await deletePost(id);
            toast.success(data.description);
            getAllPosts(1)
        } catch (error) {
            apiErrorHandler(error);
        }
    }
    return (
        <Container>
            <Row>
                <Col md="12">
                    <div className="posts mt-3">
                        {data.map((post: PostType) => (
                            <div key={post.id} className="post">
                                <Post
                                    {...post}
                                    handleDelete={handleDelete}
                                    body={handleTextLength(post.body, 100)}
                                    user={post.user}
                                />
                                <div className="mt-3">
                                    <Link to={`/post/${post.id}/view`}>Read More &gt;&gt;</Link>
                                </div>

                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default LatestPosts;