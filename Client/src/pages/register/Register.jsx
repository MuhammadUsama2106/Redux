import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Formik, useFormik } from "formik";
import axios from "axios";
const Register = () => {
  const formik = useFormik({
    initialValues: {
      first_name: " ",
      last_name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      axios
        .post("http://localhost:3001/api/register", values)
        .then((response) => {
          console.log("Request successful:", response);
        })
        .catch((error) => {
          console.error("Request error:", error);
        });
    },
  });

  return (
    <>
      <h1 className="text-center mb-5 mt-5">Registration Page</h1>
      <div className="container d-flex justify-content-center ">
        <Form onSubmit={formik.handleSubmit} className="w-80%">
          <Form.Group className="mb-3">
            <Form.Label>First Name </Form.Label>

            <Form.Control
              type="text"
              id="first_name"
              name="first_name"
              value={formik.values.first_name}
              onChange={formik.handleChange}
              placeholder="First Name...."
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              id="last_name"
              name="last_name"
              value={formik.values.last_name}
              onChange={formik.handleChange}
              placeholder="type lastname"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Enter Password</Form.Label>
            <Form.Control
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Type Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Register;
