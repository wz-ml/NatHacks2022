import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { auth } from "../firebase";
import React, { useRef } from "react";
import "./Login.css";

function Login() {
  const emailref = useRef(null);
  const pwdref = useRef(null);

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailref.current.value,
        pwdref.current.value
      )
      .then((user) => {
        console.log(user);
        console.log(user.user.email);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(emailref.current.value, pwdref.current.value)
      .then((user) => {
        console.log(user);
        console.log(user.user.email);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <img src={require("./login.png")} style={{ height: "36rem" }} />
        <Form
          style={{
            width: "25%",
            marginTop: "4rem",
            borderRadius: "4px",
            position: "relative",
            left: "10%",
            border: "1px  #536DFE",
            padding: "30px",
            height: "30rem",
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
          }}
        >
          <Form.Label
            style={{
              fontWeight: "bold",
              fontSize: "30px",
              color: "#536DFE",
              fontFamily:"Inter"
            }}
          >
            LOGIN
          </Form.Label>

          <Form.Group className="xxl" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={emailref}
              style={{ textAlign: "center" }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="xxl" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={pwdref}
              style={{ textAlign: "center" }}
            />
          </Form.Group>
          <Button
            variant="success"
            type="submit"
            onClick={signIn}
            style={{ width: "80%" , marginTop:"10%", borderRadius:"4px",backgroundColor:"#536DFE",border:"none"}} 

          >
            Login
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Login;
