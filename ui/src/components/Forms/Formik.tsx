import React from 'react'
import { Formik } from "formik"

interface FormikInterface {
    validationSchema: any,
    values: any,
    handleSubmit: any,
    handleChange?: any,
    children: any
}
const FormsWrapper: React.FC<FormikInterface> = (props) => {
    let { children, values, handleSubmit } = props
    return (
        <Formik
            initialValues={values}
            onSubmit={handleSubmit}
            validateOnChange={true}
            {...props}
        >
            {children}
        </Formik>

    )
}

export default FormsWrapper;

export const showFieldError = (name: string, errors: any, touched: any) => {
    return (
        <>
            {touched[name] && errors[name] && errors[name].trim() !== "" ?
                <div className="mb-2">
                    <small className="text-danger">{errors[name]}</small>
                </div>

                : null}
        </>
    )
}