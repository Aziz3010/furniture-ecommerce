import React, { useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// import { useNavigate } from "react-router-dom";
import "../styles/registerPage.css";

const Register = () => {
  // inputs
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // msg for errors for inputs
  const [usernameMSG, setUsernameMSG] = useState("");
  const [phoneNumberMSG, setPhoneNumberMSG] = useState(0);
  const [emailMSG, setEmailMSG] = useState("");
  const [passwordMSG, setPasswordMSG] = useState("");
  const [allFieldMSG, setAllFieldMSG] = useState("");

  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(false);
    let correctUsername = false;
    let correctPhoneNumber = false;
    let correctEmail = false;
    let correctPassword = false;
    let allowToAccess = false;

    if (username !== "" && phoneNumber !== "" && phoneNumber !== 0 && email !== "" && password !== "") {
      // remove old msg
      if (allFieldMSG !== "") {
        setAllFieldMSG("");
      }

      // username
      if (username === "") {
        setUsernameMSG("First name is required");
        correctUsername = false;
      } else {
        if (username.length < 3) {
          setUsernameMSG("First name should be more than 2 characters");
          correctUsername = false;
        } else {
          if (usernameMSG !== "") {
            setUsernameMSG("");
          }
          correctUsername = true;
        }
      }

      // phoneNumber
      if (phoneNumber === "") {
        setPhoneNumberMSG("Phone number is required");
        correctPhoneNumber = false;
      } else {
        if (phoneNumber === 0 || phoneNumber.length < 11) {
          setPhoneNumberMSG("Phone number not valid");
          correctPhoneNumber = false;
        } else {
          if (phoneNumberMSG !== "") {
            setPhoneNumberMSG("");
          }
          correctPhoneNumber = true;
        }
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

      // check on all fields
      if (correctUsername && correctPhoneNumber && correctEmail && correctPassword) {
        allowToAccess = true;
      } else {
        allowToAccess = false;
      }

      // check if allthings are ok
      if (allowToAccess) {
        setLoading(true);
        let UserOBJ = {
          username: username,
          phoneNumber: phoneNumber,
          email: email,
          password: password,
        };
        console.log(UserOBJ);
        // send data to api by axios
        // if respons is ok navigate url to /home
        // navigate("/home");;
      }
    } else {
      setAllFieldMSG("All fields are required");
    }
  };


  return <Helmet title="Register">
    <section className='registerPage'>
      <Container>
        <Row>
          {
            loading ? <Col lg="12"><h5 className='text-center'>Loading...</h5></Col> :
              <Col lg="6" className='m-auto text-center'>
                <h3 className='fw-bold fs-4 mb-4'>Welcome!</h3>
                <Form className='register__form' onSubmit={handleRegister}>
                  <FormGroup className='form__group'>
                    <input type="text" placeholder='Username' onChange={(e) => { setUsername(e.target.value) }} />
                    {usernameMSG !== "" ? <p className='alert alert-danger py-1 mt-2'>{usernameMSG}</p> : null}
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <input type="number" placeholder='Phone like 01000000000' onChange={(e) => { setPhoneNumber(e.target.value) }} />
                    {phoneNumberMSG !== "" && phoneNumberMSG !== 0 ? <p className='alert alert-danger py-1 mt-2'>{phoneNumberMSG}</p> : null}
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <input type="text" placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} />
                    {emailMSG !== "" ? <p className='alert alert-danger py-1 mt-2'>{emailMSG}</p> : null}
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <input type="password" placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} />
                    {passwordMSG !== "" ? <p className='alert alert-danger py-1 mt-2'>{passwordMSG}</p> : null}
                  </FormGroup>
                  {allFieldMSG !== "" ? <p className='alert alert-danger py-1 mb-1'>{allFieldMSG}</p> : null}
                  <motion.button whileTap={{ scale: 1.2 }} className="register__btn">Register</motion.button>
                  <Link to="/login">Have an account? Login now</Link>
                </Form>
              </Col>
          }
        </Row>
      </Container>
    </section>
  </Helmet>
};

export default Register;