import moment from 'moment'
import React from 'react'

const Post: React.FC<any> = ({ title, createdAt, body,user }) => {
    return (
        <>
            <div className="d-flex align-items-center mt-3">
                <h1>{title}</h1>
                <div className='ml-auto'>
                    <p className="my-0 font-weight-bolder">{user?.firstName} {user?.lastName}</p>
                <p className="my-0 small text-muted">{moment(createdAt).fromNow()}</p>

                </div>
            </div>
            <p>{body} </p>

        </>
    )
}

export default Post
