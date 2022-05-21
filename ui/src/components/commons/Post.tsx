import { AuthContext } from 'contexts/Auth/AuthContext'
import moment from 'moment'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

const Post: React.FC<any> = ({id,  title, createdAt, body, user: postUser }) => {
    const { user } = useContext(AuthContext);
    return (
        <>
            <div className="d-flex align-items-center mt-3">
                <h1>{title}</h1>

                {user.id === postUser.id && <p className="ml-auto">
                        <Link to={`/post/${id}/edit`} className="btn btn-warning">Edit</Link>
                    </p>}
            </div>
            <p>{body} </p>
            <div className='ml-auto'>
                <p className="my-0 font-weight-bolder">{postUser?.firstName} {postUser?.lastName}</p>
                <p className="my-0 small text-muted">{moment(createdAt).fromNow()}</p>

            </div>

        </>
    )
}

export default Post
