import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class MenuBar extends React.Component {

    render() {
        return (
            <Container>
                <Navbar id="topo" bg="light" expand="lg">
                    <Navbar.Brand as="h5">
                        <Link to='/'>Camarão_IA</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as="h6">
                                <Link to='/experts'>Especialistas</Link>
                            </Nav.Link>
                            <Nav.Link as="h6">
                                <Link to='/analysis'>Análises</Link>
                            </Nav.Link>
                            <Nav.Link as="h6">
                                <Link to='/farms'>Fazendas</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        )
    }
}
export default MenuBar
