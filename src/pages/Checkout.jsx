import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import "../styles/checkoutPage.css";
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const totalQuantity = useSelector(state=>state.cart.totalQuantity);
  const totalAmount = useSelector(state=>state.cart.totalAmount);
  const tax = totalAmount * 3 / 100;
  const shipping = 0;

  return <Helmet title="Checkout">
    <section className='checkoutPage'>
      <Container>
        <Row>

          <Col lg="8" className='mb-3'>
            <h6 className='mb-4 fw-bold'>Billing Information</h6>
            <Form className='billing__form'>
              <FormGroup className="form__group">
                <motion.input whileFocus={{ scale: .9 }} type="text" placeholder='Enter your name' />
              </FormGroup>
              <FormGroup className="form__group">
                <motion.input whileFocus={{ scale: .9 }} type="email" placeholder='Enter your email' />
              </FormGroup>
              <FormGroup className="form__group">
                <motion.input whileFocus={{ scale: .9 }} type="nubmer" placeholder='Phone nubmer' />
              </FormGroup>
              <FormGroup className="form__group">
                <motion.input whileFocus={{ scale: .9 }} type="text" placeholder='Street address' />
              </FormGroup>
              <FormGroup className="form__group">
                <motion.input whileFocus={{ scale: .9 }} type="text" placeholder='City' />
              </FormGroup>
              <FormGroup className="form__group">
                <motion.input whileFocus={{ scale: .9 }} type="text" placeholder='Postal code' />
              </FormGroup>
              <FormGroup className="form__group">
                <motion.input whileFocus={{ scale: .9 }} type="text" placeholder='Country' />
              </FormGroup>
            </Form>
          </Col>

          <Col lg="4" className='mb-3'>
            <h6 className='mb-4 fw-bold'>Order Information</h6>
            <div className="checkout__cart">
              <h6 className='mb-4'>Total Qauntity: <span>{totalQuantity}</span></h6>
              <h6 className='mb-4'>Subtotal: <span>${totalAmount}</span></h6>
              <h6 className='mb-4'>Tax (3%): <span>${tax}</span></h6>
              <h6 className='mb-4'><span>Shipping: <br />Free Shipping</span> <span>${shipping}</span></h6>
              <h5>Total Cost: <span>${totalQuantity + totalAmount + tax + shipping}</span></h5>
              <motion.button whileTap={{ scale: 1.1 }} className='order__btn'>confirm your order now</motion.button>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Checkout;