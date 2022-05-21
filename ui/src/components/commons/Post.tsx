import { AuthContext } from 'contexts/Auth/AuthContext'
import moment from 'moment'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import  Button  from 'components/Button/Button';

const Post: React.FC<any> = ({id,  title, createdAt, body, user: postUser, handleDelete }) => {
    const { user } = useContext(AuthContext);

    const [deleting, setDeleting] = useState(false);

    const onDelete = ()=>{
        setDeleting(true)
        handleDelete(id)
    }
    return (
        <>
            <div className="d-flex align-items-center mt-3">
                <h1>{title}</h1>

                {user.id === postUser.id && <p className="ml-auto">
                        <Link to={`/post/${id}/edit`} className="btn btn-warning">Edit</Link>
                        <Button color='danger' loading={deleting? 1: 0} onClick={onDelete} className='ml-2'text="Delete" />
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
