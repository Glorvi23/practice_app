import React, { useState } from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
 
    console.log(state.name, state.password);
  };

  const [state, setState] = useState({
    name: "Alan",
    password: "johnny^65",
  });

  return (
    <div>
      <div className="mt-4">
        <h2>Sign Up</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                name="username"
                value={state.name}
                onChange={(e) => {
                  // setState("Bob");
                  setState(e.target.value);
                }}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                value={state.password}
                onChange={(e) => {
                  setState(e.target.value);
                }}
              />
            </Col>
          </Row>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </Container>
        <Container className="mt-4">
          <h3>Hello {state.name}!</h3>
          <p>
            I probably shouldn't tell you this, but your password is{" "}
            {state.password}!
          </p>
        </Container>
      </form>
    </div>
  );
};

export default Signup;
