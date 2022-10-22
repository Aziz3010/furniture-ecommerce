import React, { useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import Products from "../assets/data/products";
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { motion } from "framer-motion";
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/CartSlice';
import { toast } from 'react-toastify';
import "../styles/ProductDetails.css";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { productID } = useParams();
  const [tab, setTab] = useState("description");
  const selectedProduct = Products.find((product) => product.id === productID);
  const { productName, imgUrl, price, shortDesc, description, reviews, avgRating } = selectedProduct;

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id: productID,
      productName: productName,
      image: imgUrl,
      price: price,
    }));
    toast.success("Produt added successfully");
  };

  return <Helmet title={productName}>
    <section className='product__details'>
      <Container>
        <Row className='align-items-center'>
          <Col lg="6">
            <div className="product__details-image">
              <img src={imgUrl} alt={productName} />
            </div>
          </Col>
          <Col lg="6">
            <div className="product__details-details">
              <h2>{productName}</h2>
              <div className="product__rating">
                <div>
                  <span><i className="ri-star-s-fill"></i></span>
                  <span><i className="ri-star-s-fill"></i></span>
                  <span><i className="ri-star-s-fill"></i></span>
                  <span><i className="ri-star-s-fill"></i></span>
                  <span><i className="ri-star-half-s-line"></i></span>
                </div>
                <p>( <span>{avgRating}</span> ratings )</p>
              </div>
              <span className='product__price'>${price}</span>
              <p className='mt-3'>{shortDesc}</p>
              <motion.button whileTap={{ scale: 1.2 }} onClick={addToCart} className='addToCart__btn'>add to cart</motion.button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg="12">
            <div className="tab__wrapper">
              <h6 onClick={() => { setTab("description") }} className={tab === "description" ? "active__tab" : ""}>Description</h6>
              <h6 onClick={() => { setTab("reviews") }} className={tab === "reviews" ? "active__tab" : ""}>Reviews ({reviews.length})</h6>
            </div>

            <div className="tab__content">
              {
                tab === "description" ? <p className='tab__content-description'>{description}</p> :
                  tab === "reviews" ?
                    <div className='tab__content-reviews'>
                      {
                        reviews.map((review, index) => {
                          return (
                            <div className='review' key={index}>
                              <h6>{review.rating} (Rating)</h6>
                              <p>{review.text}</p>
                            </div>
                          )
                        })
                      }
                      <form className='reviews__form'>
                        <h5 className='text-center mb-4'>Leave a review</h5>
                        <input type="text" placeholder='Review' className='form-control mb-3' />
                        <div className="stars">
                          <span>1 <i className="ri-star-s-fill"></i></span>
                          <span>2 <i className="ri-star-s-fill"></i></span>
                          <span>3 <i className="ri-star-s-fill"></i></span>
                          <span>4 <i className="ri-star-s-fill"></i></span>
                          <span>5 <i className="ri-star-s-fill"></i></span>
                        </div>
                        <button className='comment__btn'>Send</button>
                      </form>
                    </div>
                    :
                    null
              }
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default ProductDetails;

// 01:01:00