import { AuthContext } from 'contexts/Auth/AuthContext'
import AuthLayout from 'layout/Auth/AuthLayout'
import React, { useContext } from 'react'
import { Card, CardBody } from 'reactstrap'

const Profile: React.FC<any> = () => {
    let { user } = useContext(AuthContext);
    return (
        <AuthLayout>
            <Card>
                <CardBody>
                    <h2>Account Information</h2>
                    <div className="d-flex align-items-center">
                        <p> Firtsname:</p><p className='ml-auto'><p>{user.firstName}</p></p></div>
                    <div className="d-flex align-items-center"><p>Lastname: </p><p className='ml-auto'>{user.lastName || "N/A"}</p></div>
                    <div className="d-flex align-items-center"><p>Email: </p><p className='ml-auto'>{user.email}</p></div>
                </CardBody>
            </Card>

        </AuthLayout>
    )
}

export default Profile