import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "bootstrap/dist/css/bootstrap.min.css";
import { auth } from '../firebase'



function OffcanvasExample() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3" style={{ boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)", }}>
          <Container fluid>
            <Navbar.Brand href="/" style={{ fontSize: "25px", fontWeight: "bold", fontFamily: "Inter", color: "#536DFE", textAlign: "center" }}>mindMarket</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Navigate with Us!
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/review">Review Content</Nav.Link>
                  <NavDropdown
                    title="Find Us!"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Instagram</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                    LinkedIn
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Meet The Team
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Button variant="danger" onClick={() => auth.signOut()} style={{
                    width: "80%", margin: "0 auto", display: "block", marginTop: "20%"
                  }}>Sign Out</Button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;