import FormsWrapper, { showFieldError } from 'components/Forms/Formik';
import React from 'react';
import * as Yup from "yup"
import { Col, Input, Label, Row, FormGroup } from 'reactstrap'
import Button from 'components/Button/Button';

const validation = Yup.object().shape({
    email: Yup.string().required("Required"),
    password: Yup.string()
        .required("Required")
        .min(4, "Invalid Password"),
})

interface formInterface {
    onSubmit?: any,
}
const Form: React.FC<formInterface> = (props) => {
    let { onSubmit } = props
    return (
        <FormsWrapper
            values={{email: "", password: ""}}
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
                            <Row as="row">

                                <Col sm="12" className="text-left text-sm-right">

                                    <Button color="primary" block className="btn-floating small" text="Login" type="submit" loading={isSubmitting? 1 : 0} />
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