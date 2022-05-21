import { apiErrorHandler } from 'Helpers/utility';
import React from 'react';
import { Link } from 'react-router-dom';
import { setAccessToken } from 'services/apiAdapter';
import { login, LoginPayload } from 'services/authService';
import Form from './Form';

function Login() {
    const handleSubmit = async(values:LoginPayload)=>{
        try {
            const {data: {data}} = await login(values)
            setAccessToken(data?.access_token)
            window.location.href = "/";
        } catch (error) {
            apiErrorHandler(error)
        }
    }
    return (
        <div>
            <h3>Login</h3>
            <Form 
                onSubmit={handleSubmit}/>
            <p className='text-right mt-3 text-primary'>
                Don't have an account? <Link to="/auth/signup">Sign Up</Link>
            </p>
        </div>
    )
}

export default Login