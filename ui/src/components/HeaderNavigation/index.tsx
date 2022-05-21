import React, { useContext, useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    Container
} from 'reactstrap';
import { Link } from "react-router-dom";
import './header.scss';
import { AuthContext } from 'contexts/Auth/AuthContext';

const Header = ({ ...props }: any) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const getActiveClassName = (url: string) => {
        if (`${window.location.pathname}${window.location.hash}` === url) {
            return "active"
        } else {
            return ''
        }
    }

    const { user } = useContext(AuthContext);
    return (
        <Navbar id='header' fixed='top' color='white' expand="md" className='pt-3'>
            <Container fluid>
                <Link className="nav-brand" to="/">
                    Blog Spot
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto mt-md-0 mt-3 align-items-center" navbar>
                        {[{
                            name: 'Posts',
                            link: '/posts',
                            useAuthentication: false,
                        }, {
                            name: 'Profile',
                            link: '/profile',
                            useAuthentication: true,
                        }].map((route) => (
                            <NavItem key={route.link} className={`${route.useAuthentication && !user.isLoggedIn ? "d-none" : ""}`}>
                                <Link className={`${getActiveClassName(`${route.link}`)} nav-link mx-3 my-md-0 my-2 text-darkBlue`} to={route.link}>{route.name}</Link>
                            </NavItem>
                        ))}
                        {!user.isLoggedIn && <>
                            <NavItem className={`${getActiveClassName('/auth/login')}`}>
                                <Link className="btn btn-light btn-block my-md-0 my-3 py-md-2 py-2 text-darkBlue" to="/auth/login">Login</Link>
                            </NavItem>
                            <NavItem className={`${getActiveClassName('/')}`}>
                                <Link to="/auth/signup" className=" btn btn-warning btn-block my-md-0 my-3 py-md-2 py-2 ml-0 ml-md-3" >Sign Up</Link>
                            </NavItem></>}
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;