import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import magnifyGlassPNG from '../static/magnify-glass.png'; 
import AboutModal from './AboutModal';
import Image from 'react-bootstrap/Image';

export const Header = () => {

    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Navbar key={'lg'} bg="light" expand='lg' className="mb-3">
                <Container fluid>
                <Navbar.Brand href="#">
                    <Image
                    alt=""
                    src={magnifyGlassPNG} 
                    width={33} 
                    height={33}
                    className="d-inline-block align-top"
                    />&nbsp;&nbsp;
                    <span class="navbar-brand mb-0 h1 fs-2">FindMyWord</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-lg`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <Nav>
                        <Navbar.Text>
                        When your mind draws a blank on that word you need.
                        </Navbar.Text>
                    </Nav>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link onClick={() => setModalShow(true)}>About</Nav.Link>
                    </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <AboutModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
    }

export default Header;