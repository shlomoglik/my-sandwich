import { Navbar,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Heading() {
  const { currentUser,logout } = useAuth();

  const navStyle = {
    display:"flex",
    flex:"1"
  }
  const userAvatarStyle = {
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    position: "absolute",
    left: "5px",
    top: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    border: "1px solid",
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg p-2" style={navStyle}>
      <Navbar.Brand>
        <Link to="/">מה אוכלים מחר ? </Link>
      </Navbar.Brand>
      {currentUser && (
        <>
          <Button onClick={logout}>יציאה</Button>
          <Navbar.Text style={userAvatarStyle}>
            {currentUser.displayName || currentUser.email.substring(0, 2)}
          </Navbar.Text>
        </>
      )}
    </Navbar>
  );
}
