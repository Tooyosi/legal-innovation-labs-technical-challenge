import FormsWrapper, { showFieldError } from 'components/Forms/Formik';
import React from 'react';
import * as Yup from "yup"
import { Col, Input, Label, Row, FormGroup } from 'reactstrap'
import Button from 'components/Button/Button';
import { PostType } from 'Pages/Landing/LatestPosts';

const validation = Yup.object().shape({
    title: Yup.string().required("Required"),
    body: Yup.string()
        .required("Required")
})

interface formInterface {
    onSubmit?: any,
    initialValues?: PostType
}
const Form: React.FC<formInterface> = (props) => {
    let { onSubmit, initialValues } = props
    return (
        <FormsWrapper
            values={initialValues ? initialValues : { title: "", body: "" }}
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
                                <Label className="small text-muted mb-0">Title</Label>
                                <Input
                                    type="text"
                                    name="title"
                                    onBlur={handleBlur}
                                    value={values.title}
                                    invalid={errors.title && touched.title}
                                    onChange={handleChange} />
                                {showFieldError("title", errors, touched)}
                            </FormGroup>
                            <FormGroup>
                                <Label className="small text-muted mb-0">Body</Label>
                                <Input
                                    type="textarea"
                                    name="body"
                                    rows="10"
                                    onBlur={handleBlur}
                                    value={values.body}
                                    invalid={errors.body && touched.body}
                                    onChange={handleChange} />
                                {showFieldError("body", errors, touched)}
                            </FormGroup>
                            <Row as="row">

                                <Col sm="12" className="text-left text-sm-right">

                                    <Button color="primary" block className="btn-floating small" text="Submit" type="submit" loading={isSubmitting ? 1 : 0} />
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