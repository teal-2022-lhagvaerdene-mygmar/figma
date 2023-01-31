import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export function Header() {
  return (
    <>
      <header className="container-fluid" style={{ color: "#292D32" }}>
        <div className="row justify-content-between text-center">
          <h5 className="col-6 col-md-4">
            Need help? Call us: (+98) 0234 456 789
          </h5>
          <h5 className="col-6 col-md-4">
            <img src="Vector.png" alt="location" className="mx-3" />
            Our store
            <img src="group.png" alt="car" className="mx-3" />
            Track your order
          </h5>
        </div>
      </header>
      <Search />
    </>
  );
}
function Search() {
  return (
    <>
      <div
        className="container-fluid text-light row align-items-center py-3"
        style={{ backgroundColor: "#003F62" }}>
        <img src="logo 1.png" alt="electron " className="col-4 col-md-2 " />
          <form className="col-8 col-md-6\  ">
          <input placeholder="search" className="border-0 rounded-4 " />
          <button
            className="border-0 rounded-4 bg-warning text-light "
            style={{ position: "relative", right: 50 }}>
            search
          </button>
        </form>

        <h4 className="col-12 col-md-4 text-center">
          <img src="user.png " alt="user" /> sign in
          <img src="heart.png" alt="heart" className="mx-3" />
          <img
            src="0.png"
            alt="0"
            className="bg-warning rounded-2"
            width={10}
          />
          <img src="shopping-cart.png" alt="shopping" className="mx-3" />
          <img
            src="0.png"
            alt="0"
            className="bg-warning rounded-2"
            width={10}
          />
        </h4>
      </div>
      <AdminNavbar />
    </>
  );
}
function AdminNavbar() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home" className="bg-warning">
            Navbar
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
