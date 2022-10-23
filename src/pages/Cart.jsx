import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import "../styles/cartPage.css";
import { Container, Row, Col } from 'reactstrap';
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/CartSlice";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const increaseQuantity = (itemId) => {
    dispatch(cartActions.increaseItem(itemId));
  };

  const decreaseQuantity = (itemId) => {
    dispatch(cartActions.decreaseItem(itemId));
  };

  const deleteAllQuantity = (itemId) => {
    dispatch(cartActions.deleteItem(itemId));
  };

  return <Helmet title="Shopping Cart">
    <section className='cartPage'>
      <Container>
        <Row>
          <Col lg="9" className='mt-2'>
            <div className='table-responsive'>
              <table className='table table-bordered table-hover table-striped text-nowrap text-center'>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price 1x</th>
                    <th>Quantity</th>
                    <th>Controls</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cartItems.length > 0 ?
                      cartItems?.map((product, index) => {
                        return (
                          <tr key={index}>
                            <td><img src={product.imgUrl} alt={product.productName} className='td_productImg' /></td>
                            <td>{product.productName}</td>
                            <td>${product.price}</td>
                            <td>{product.quantity}x</td>
                            <td>
                              <div className='tb__controls'>
                                <div className='increase_decrease__btn'>
                                  <motion.button onClick={() => { increaseQuantity(product.id) }} whileTap={{ scale: 1.2 }} className='btn btn-sm bg-primary text-white'><i className="ri-add-line"></i></motion.button>
                                  <motion.button onClick={() => { decreaseQuantity(product.id) }} whileTap={{ scale: 1.2 }} className='btn btn-sm bg-secondary text-white'><i className="ri-subtract-line"></i></motion.button>
                                </div>
                                <motion.button onClick={() => { deleteAllQuantity(product.id) }} whileTap={{ scale: 1.2 }} className='btn btn-sm bg-danger text-white'><i className="ri-delete-bin-line"></i></motion.button>
                              </div>
                            </td>
                          </tr>
                        )
                      })
                      :
                      <tr><td colSpan={5}><h2 className='fs-6'>Cart empty</h2></td></tr>
                  }
                </tbody>
              </table>
            </div>
          </Col>
          <Col lg="3" className='mt-2'>
            <div className="checkout__div">
              <div className='table-responsive'>
                <table className='table table-bordered table-hover table-striped text-center'>
                  <thead>
                    <tr>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><h2 className='fs-6'>${totalAmount}</h2></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {
                cartItems.length > 0 ?
                  <div>
                    <p className='text-center'>Tax and shipping will calculate in checkout.</p>
                    <div className='checkout__div-btns'>
                      <Link to="/checkout" className='btn btn-primary w-100'>Checkout</Link>
                      <p className='m-0'>Or</p>
                      <Link to="/shop" className='btn btn-success w-100'>Continue Shopping</Link>
                    </div>
                  </div>
                  : null
              }
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
};

export default Cart;