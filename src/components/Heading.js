import {  Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Heading() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg p-2">
      <Navbar.Brand>
        <Link to="/">מה אוכלים מחר ? </Link>
      </Navbar.Brand>
    </Navbar>
  );
}
