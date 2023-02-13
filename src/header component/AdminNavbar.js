import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

export function AdminNavbar() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <NavDropdown
              title="Browse categories"
              id="basic-nav-dropdown"
              style={{ backgroundColor: "#EDA415", color: "white" }}
              className="p-3">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavDropdown
              title="Home"
              id="basic-nav-dropdown"
              style={{ marginLeft: 30 }}>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Catalog" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <NavDropdown
              title="Pages"
              id="basic-nav-dropdown"
              style={{ marginLeft: 30 }}>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">About us</Nav.Link>
          </Nav>
          <h5 style={{ color: " #003F62", fontWeight: 700 }}>
            30 Days Free Return
          </h5>
        </Container>
      </Navbar>
    </>
  );
}
