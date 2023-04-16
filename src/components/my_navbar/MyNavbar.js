import './MyNavbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/home">BOTÁNICA</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/conceptos">Conceptos</Nav.Link>
                <NavDropdown title="Árboles" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/arboles/0">Manzano</NavDropdown.Item>
                  <NavDropdown.Item href="/arboles/1">Naranjo</NavDropdown.Item>
                  <NavDropdown.Item href="/arboles/2">Limonero</NavDropdown.Item>
                  <NavDropdown.Item href="/arboles/3">Peral</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Flores" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/flores/0">Rosa</NavDropdown.Item>
                  <NavDropdown.Item href="/flores/1">Tulipán</NavDropdown.Item>
                  <NavDropdown.Item href="/flores/2">Girasol</NavDropdown.Item>
                  <NavDropdown.Item href="/flores/3">Orquídea</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="/sobremi">Sobre mi</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default MyNavbar;