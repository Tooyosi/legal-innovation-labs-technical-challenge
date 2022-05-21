import FormsWrapper, { showFieldError } from 'components/Forms/Formik';
import React from 'react';
import * as Yup from "yup"
import { Col, Input, Label, Row, FormGroup } from 'reactstrap'
import Button from 'components/Button/Button';

const validation = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    password: Yup.string()
        .required("Required")
        .min(4, "Invalid Password"),
    confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Password dont match")
})

interface formInterface {
    onSubmit?: any,
}
const Form: React.FC<formInterface> = (props) => {
    let { onSubmit } = props
    return (
        <FormsWrapper
            values={{ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" }}
            handleSubmit={onSubmit}
            validationSchema={validation}>
            {
                (props: { values: any; isValid: any, touched: any; errors: any; handleBlur: any; handleChange: any; handleSubmit: any; isSubmitting: any }) => {
                    const {
                        values,
                        touched,
                        errors,
                        handleBlur,
                        handleChange,
                        isSubmitting,
                        handleSubmit } = props;
                    return (
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col md="6">
                                    <Label className="small text-muted mb-0">Firstname</Label>
                                    <Input
                                        type="text"
                                        name="firstName"
                                        onBlur={handleBlur}
                                        value={values.firstName}
                                        invalid={touched.firstName && errors.firstName}
                                        onChange={handleChange} />
                                    {showFieldError("firstName", errors, touched)}
                                </Col>
                                <Col md="6">
                                    <Label className="small text-muted mb-0">Lastname</Label>
                                    <Input
                                        type="text"
                                        name="lastName"
                                        onBlur={handleBlur}
                                        value={values.lastName}
                                        invalid={touched.lastName && errors.lastName}
                                        onChange={handleChange} />
                                    {showFieldError("lastName", errors, touched)}
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label className="small text-muted mb-0">Email Address</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    onBlur={handleBlur}
                                    value={values.email}
                                    invalid={touched.email && errors.email}
                                    onChange={handleChange} />
                                {showFieldError("email", errors, touched)}

                            </FormGroup>
                            <FormGroup>
                                <Label className="small text-muted mb-0">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    onBlur={handleBlur}
                                    value={values.password}
                                    invalid={errors.password && touched.password}
                                    onChange={handleChange} />
                                {showFieldError("password", errors, touched)}
                            </FormGroup>
                            <FormGroup>
                                <Label className="small text-muted mb-0">Confirm Password</Label>
                                <Input
                                    type="password"
                                    name="confirmPassword"
                                    onBlur={handleBlur}
                                    value={values.confirmPassword}
                                    invalid={errors.confirmPassword && touched.confirmPassword}
                                    onChange={handleChange} />
                                {showFieldError("confirmPassword", errors, touched)}
                            </FormGroup>
                            <Row as="row">

                                <Col sm="12" className="text-left text-sm-right">
                                    <Button color="primary" block className="btn-floating small" text="Signup" type="submit" loading={isSubmitting ? 1 : 0} />
                                </Col>

                            </Row>
                        </form>
                    )
                }
            }
        </FormsWrapper >
    )
}


export default Form;