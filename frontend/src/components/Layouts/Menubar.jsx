import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Account from "../Account/Account";

function Menubar() {
  return (
    <Navbar bg="light" expand="lg" className="sticky-top">
      <Container>
        <Navbar.Brand>
          <NavLink to={"/"} className={"nav-link"}>
            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#2563eb",
              }}
            >
              Daily Digest
            </h1>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Account />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menubar;
