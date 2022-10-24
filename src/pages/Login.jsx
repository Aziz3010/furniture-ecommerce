import React, { useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import "../styles/loginPage.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailMSG, setEmailMSG] = useState("");
  const [passwordMSG, setPasswordMSG] = useState("");
  const [allFieldMSG, setAllFieldMSG] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    let correctEmail = false;
    let correctPassword = false;
    let allowToAccess = false;

    if (email !== "" && password !== "") {
      // remove old msg
      if (allFieldMSG !== "") {
        setAllFieldMSG("");
      }
      // email
      if (email === "") {
        setEmailMSG("Email is required");
        correctEmail = false;
      } else {
        if (email.includes("@")) {
          if (emailMSG !== "") {
            setEmailMSG("");
          }
          correctEmail = true;
        } else {
          setEmailMSG("Email not valid");
          correctEmail = false;
        }
      }
      // password
      if (password === "") {
        setPasswordMSG("Password is required");
        correctPassword = false;
      } else {
        if (password.length <= 4) {
          setPasswordMSG("Password most be more than 4 characters");
          correctPassword = false;
        } else {
          if (passwordMSG !== "") {
            setPasswordMSG("");
          }
          correctPassword = true;
        }
      }

      // check on email and password
      if (correctEmail && correctPassword) {
        allowToAccess = true;
      } else {
        allowToAccess = false;
      }

      // check if allthings are ok
      if (allowToAccess) {
        navigate("/home");
      }
    } else {
      setAllFieldMSG("All fields are required");
    }

  };

  return <Helmet title="Login">
    <section className='loginPage'>
      <Container>
        <Row>
          <Col lg="6" className='m-auto text-center'>
            <h3 className='fw-bold fs-4 mb-4'>Nice to see you again</h3>
            <Form className='auth__form' onSubmit={handleLogin}>
              <FormGroup className='form__group'>
                <input type="text" placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} />
                {emailMSG !== "" ? <p className='alert alert-danger py-1 mt-2'>{emailMSG}</p> : null}
              </FormGroup>
              <FormGroup className='form__group'>
                <input type="password" placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} />
                {passwordMSG !== "" ? <p className='alert alert-danger py-1 mt-2'>{passwordMSG}</p> : null}
              </FormGroup>

              {allFieldMSG !== "" ? <p className='alert alert-danger py-1 mb-1'>{allFieldMSG}</p> : null}
              <motion.button whileTap={{ scale: 1.2 }} className="login__btn">Login</motion.button>
              <Link to="/register">Don't have an account! Create one</Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
};

export default Login;