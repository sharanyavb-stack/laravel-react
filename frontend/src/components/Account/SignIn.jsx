import { Alert, Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";

const SignIn = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userLogin, errorMessage, vError, loading } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await userLogin(email, password);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "0.5rem",
          width: "400px",
        }}
      >
        <div className="mb-4">
          <h3>Sign In</h3>
        </div>
        <Form onSubmit={handleSubmit}>
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-center">
              Email <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              required
              min={3}
              onChange={(event) => setEmail(event.target.value)}
            />
            {vError && <p className="text-danger pt-1">{vError.email}</p>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              Password <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              required
              min={3}
              onChange={(event) => setPassword(event.target.value)}
            />
            {vError && <p className="text-danger pt-1">{vError.password}</p>}
          </Form.Group>
          <div className="d-flex align-items-center">
            <Form.Label className="ms-auto mb-3">
              <NavLink
                to={"/forgot-password"}
                className={"text-primary fw-bold text-decoration-none"}
              >
                Forgot Password?
              </NavLink>
            </Form.Label>
          </div>
          <Button variant="primary" type="submit" disabled={loading}>
            Sign In
          </Button>
          <Button
            variant="outline-primary"
            style={{ marginLeft: 10 }}
            type="submit"
            onClick={handleClose}
          >
            Cancel
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
