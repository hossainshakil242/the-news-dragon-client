import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NevigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg='light' variant='light'>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to='/category/0'>Home</Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>

                            {user &&
                                <FaUserCircle className='fs-2'></FaUserCircle>
                            }

                            {user ?
                                <Link to='logout'>
                                    <Button onClick={handleLogOut} variant="secondary">Logout</Button>
                                </Link> :
                                <Link to='/login'>
                                    <Button variant="secondary">Login</Button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NevigationBar;