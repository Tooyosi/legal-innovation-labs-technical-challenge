import { apiErrorHandler } from 'Helpers/utility';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signup, SignupPayload } from 'services/authService';
import Form from './Form';

function Signup() {
    const handleSubmit = async (values: SignupPayload) => {
        try {
            const { data: { data } } = await signup(values)
            toast.success(data.description)
            window.location.href = "/auth/login"
        } catch (error) {
            apiErrorHandler(error)
        }
    }
    return (
        <div>
            <h3>Create Account</h3>
            <Form
                onSubmit={handleSubmit} />
            <p className='text-right mt-3 text-primary'>
                Already have an account? <Link to="/auth/signup">signup</Link>
            </p>
        </div>
    )
}

export default Signup