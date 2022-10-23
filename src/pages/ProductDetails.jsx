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
import ProductsList from '../components/UI/ProductsList';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { productID } = useParams();
  const [tab, setTab] = useState("description");
  const [rating, setRating] = useState(null);
  const [review, setReviw] = useState("");
  const selectedProduct = Products.find((product) => product.id === productID);
  const { productName, imgUrl, price, shortDesc, description, reviews, avgRating, category } = selectedProduct;
  const ratings = [1, 2, 3, 4, 5];

  const relatedProducts = Products.filter((product) => product.category === category);

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
              <div className="product__rating d-flex align-items-center gap-5">
                <div>
                  <span><i className="ri-star-s-fill"></i></span>
                  <span><i className="ri-star-s-fill"></i></span>
                  <span><i className="ri-star-s-fill"></i></span>
                  <span><i className="ri-star-s-fill"></i></span>
                  <span><i className="ri-star-half-s-line"></i></span>
                </div>
                <p>( <span>{avgRating}</span> ratings )</p>
              </div>

              <div className='d-flex align-items-center gap-5'>
                <span className='product__price'>${price}</span>
                <span>Category: {category.toUpperCase()}</span>
              </div>

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

                      {/* for testing only */}
                      {
                        review !== "" ?
                          <div className='review'>
                            <h6>{rating} (Rating)</h6>
                            <p>{review}</p>
                          </div>
                          :
                          null
                      }

                      <form className='reviews__form'>
                        <h5 className='text-center mb-4'>Leave a review</h5>
                        <input onChange={(e) => { setReviw(e.target.value) }} type="text" placeholder='Review' className='form-control mb-3' />
                        <div className="stars">
                          {ratings.map((element, index) => (<motion.span whileTap={{ scale: 1.2 }} key={index} onClick={() => { setRating(element) }}>{element} <i className="ri-star-s-fill"></i></motion.span>))}
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

    <section className="related__products">
      <Container>
        <Row>
          <Col lg="12" className='mb-4'>
            <h4 className='text-center'>You might also like</h4>
          </Col>
        </Row>
        <ProductsList data={relatedProducts.slice(0, 4)} />
      </Container>
    </section>
  </Helmet>
}

export default ProductDetails;

// 01:01:00