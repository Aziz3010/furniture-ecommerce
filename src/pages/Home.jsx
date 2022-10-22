import React, { useEffect, useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';
import Products from "../assets/data/products";
import counterImg from "../assets/images/counter-timer-img.png";
import Clock from '../components/UI/Clock';
import '../styles/homePage.css';

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobiles_wirelessProducts, setMobilesWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const YEAR = new Date().getFullYear();

  useEffect(() => {
    const filterdTrendingProducts = Products.filter((product) => product.category === "chair");
    const filterdBestSalesProducts = Products.filter((product) => product.category === "sofa");
    const filterdMobilesWirelessProducts = Products.filter((product) => product.category === "mobile");
    filterdMobilesWirelessProducts.push(...Products.filter((product) => product.category === "wireless"));
    const filterdPopularProducts = Products.filter((product) => product.category === "watch");
    setTrendingProducts(filterdTrendingProducts);
    setBestSalesProducts(filterdBestSalesProducts);
    setMobilesWirelessProducts(filterdMobilesWirelessProducts);
    setPopularProducts(filterdPopularProducts);
  }, []);

  return (
    <Helmet title="Home">
      <section className='hero__section'>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {YEAR}</p>
                <h2>Make Your interior More Minimalistic & Modern</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, in fugit aliquid dignissimos esse saepe excepturi sunt aperiam odit rem.</p>
                <motion.button whileTap={{ scale: 1.1 }} className='shop__btn'>
                  <Link to="/shop" >shop now</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__image">
                <img src={heroImg} alt="hero-img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />

      <section className='trending__products'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title mb-4'>trending products</h2>
            </Col>
          </Row>
          <ProductsList data={trendingProducts} />
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title mb-4'>best sales</h2>
            </Col>
          </Row>
          <ProductsList data={bestSalesProducts} />
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="clock__top-content">
                <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button whileTap={{ scale: 1.1 }} className='visit_store_btn'>
                <Link to="/shop" >visit store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="6" className='text-end counterImg'>
              <img src={counterImg} alt="counter-img" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title mb-4'>new arrivals</h2>
            </Col>
          </Row>
          <ProductsList data={mobiles_wirelessProducts} />
        </Container>
      </section>

      <section className="popular__category">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title mb-5'>popular category</h2>
            </Col>
          </Row>
          <ProductsList data={popularProducts} />
        </Container>
      </section>

    </Helmet>
  )
}

export default Home;