import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
  const YEAR = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col lg="4" className='py-4'>
            <div className="logo mb-5">
              <div>
                <h1 className='text-white'>Multimart</h1>
              </div>
            </div>

            <p className="footer__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis sapiente hic earum eum totam magnam recusandae modi nulla quidem? Vel?
            </p>
          </Col>
          <Col lg="3" className='py-4'>
            <div className="footer__quick-links">
              <h4 className="quick_links-title mb-5">Top Categories</h4>
              <ListGroup>
                <ListGroupItem className='p-0 border-0 bg-transparent'><Link to="#">Mobile Phones</Link></ListGroupItem>
                <ListGroupItem className='p-0 border-0 bg-transparent'><Link to="#">Moder Sofa</Link></ListGroupItem>
                <ListGroupItem className='p-0 border-0 bg-transparent'><Link to="#">Smart Watches</Link></ListGroupItem>
                <ListGroupItem className='p-0 border-0 bg-transparent'><Link to="#">Arm Chair</Link></ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" className='py-4'>
            <div className="footer__useful-links">
              <h4 className="useful-links-title mb-5">Useful Links</h4>
              <ListGroup>
                <ListGroupItem className='p-0 border-0 bg-transparent'><Link to="/home">Home</Link></ListGroupItem>
                <ListGroupItem className='p-0 border-0 bg-transparent'><Link to="/shop">Shop</Link></ListGroupItem>
                <ListGroupItem className='p-0 border-0 bg-transparent'><Link to="/cart">Cart</Link></ListGroupItem>
                <ListGroupItem className='p-0 border-0 bg-transparent'><Link to="/login">Login</Link></ListGroupItem>
                <ListGroupItem className='p-0 border-0 bg-transparent'><Link to="#">Privacy Policy</Link></ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" className='py-4'>
            <div className="footer__contact">
              <h4 className="contact-title mb-5">Contact</h4>
              <ListGroup>

                <ListGroupItem className='p-0 border-0 bg-transparent'>
                  <Link to="#" className='d-flex align-items-center gap-2'>
                    <span><i className="ri-map-pin-line"></i></span>
                    <p>50 Orabi st, Giza, Egypt</p>
                  </Link>
                </ListGroupItem>

                <ListGroupItem className='p-0 border-0 bg-transparent'>
                  <Link to="#" className='d-flex align-items-center gap-2'>
                    <span><i className="ri-phone-line"></i></span>
                    <p>0100 0000 000</p>
                  </Link>
                </ListGroupItem>

                <ListGroupItem className='p-0 border-0 bg-transparent'>
                  <Link to="#" className='d-flex align-items-center gap-2'>
                    <span><i className="ri-mail-line"></i></span>
                    <p>text01@example.com</p>
                  </Link>
                </ListGroupItem>


              </ListGroup>
            </div>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col lg='12'>
            <h6 className='copyright'>Copyright <i className="ri-copyright-line"></i> {YEAR}, Developed by Ahmed abdelaziz</h6>
          </Col>
        </Row>
      </Container>
    </footer>
  )
};

export default Footer;