import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);
      navigate("/dashboard");
    } catch (error) {
      console.error(error.message);
    } finally {
      setFormData({
        email: "",

        password: "",
      });
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email Address
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={handleInputChange}
              value={formData.email}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Enter Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={FormData.password}
              onChange={handleInputChange}
            />
          </Col>
        </Form.Group>
        <Button variant="dark" type="submit" className="w-100">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
