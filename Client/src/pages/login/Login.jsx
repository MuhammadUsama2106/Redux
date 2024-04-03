import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { getUser } from "../../../redux/userSlice.js";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const selector = useSelector();

  const userDataa = useSelector((state) => state?.sssss?.userData);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      axios
        .post("http://localhost:3001/api/login", values)
        .then((response) => {
          const user = response.data;

          if (response.status === 200) {
            dispatch(getUser(user));
            console.log(user);
            // navigate("/");
          }
        })
        .catch((error) => {
          console.error("Request error:", error);
        });
    },
  });

  return (
    <>
      <h1 className="text-center mb-5 mt-5">Login Page</h1>
      <div className="container d-flex justify-content-center align-items-center">
        <Form onSubmit={formik.handleSubmit} className="w-80%">
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
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Form>

        <p>{userDataa.email}</p>
        <br />

        <p>{userDataa.password}</p>
        <p>{userDataa.password}</p>
        <p>{userDataa.first_name}</p>
        <p>{userDataa.last_name}</p>
      </div>
    </>
  );
};

export default Login;
