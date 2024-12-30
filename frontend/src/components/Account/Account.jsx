import { Dropdown, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { PersonCircle, BoxArrowRight } from "react-bootstrap-icons";
import Loading from "../common/Loading";
import { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const Account = () => {
  const { loginStorageData, userLogout, loading } = useAuth();
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <>
      {loading && <Loading />}
      {showSignIn && <SignIn handleClose={() => setShowSignIn(false)} />}

      {showSignUp && <SignUp handleClose={() => setShowSignUp(false)} />}
      {loginStorageData ? (
        <>
          <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                <PersonCircle size={22} className="pb-1" />{" "}
                {loginStorageData?.user?.name}{" "}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Nav className="my-2 my-lg-0" navbarScroll onClick={userLogout}>
                  <NavLink className={"nav-link"}>
                    <BoxArrowRight className="pb-1" size={22} /> Logout
                  </NavLink>
                </Nav>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </>
      ) : (
        <>
          <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
            {/* <NavLink to={"/login"} className={"nav-link"}> */}
            <button
              onClick={() => setShowSignIn(true)}
              style={{
                marginRight: "1rem",
                padding: "0.5rem 1rem",
                border: "1px solid #1a73e8",
                borderRadius: "9999px",
                backgroundColor: "transparent",
                color: "#1a73e8",
                cursor: "pointer",
              }}
            >
              Sign In
            </button>
            {/* </NavLink> */}
          </Nav>
          <Nav className="my-2 my-lg-0" navbarScroll>
            {/* <NavLink to={"/register"} className={"nav-link"}> */}
            <button
              onClick={() => setShowSignUp(true)}
              style={{
                padding: "0.5rem 1rem",
                border: "none",
                borderRadius: "9999px",
                backgroundColor: "#1a73e8",
                color: "white",
                cursor: "pointer",
              }}
            >
              Sign Up
            </button>
            {/* </NavLink> */}
          </Nav>
        </>
      )}
    </>
  );
};

export default Account;
