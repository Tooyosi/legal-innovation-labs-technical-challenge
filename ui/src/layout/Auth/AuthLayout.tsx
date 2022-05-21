import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import "./_authLayout.scss";

const AuthLayout: React.FC<any> = ({ children }) => {
    return (
        <Container className='d-flex align-items-center'>
            <Row className='w-100'>
                <Col md="6" className='m-auto'>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default AuthLayout;