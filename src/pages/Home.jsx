import React, { useEffect, useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import '../styles/homePage.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';
import Products from "../assets/data/products";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const YEAR = new Date().getFullYear();

  useEffect(() => {
    const filterdTrendingProducts = Products.filter((product) => product.category === "chair");
    const filterdBestSalesProducts = Products.filter((product) => product.category === "sofa");

    setTrendingProducts(filterdTrendingProducts);
    setBestSalesProducts(filterdBestSalesProducts);
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
                <motion.button whileTap={{ scale: 1 }} className='shop__btn'>
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
              <h2 className='section__title'>trending products</h2>
            </Col>
          </Row>
          <ProductsList data={trendingProducts} />
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title'>best sales</h2>
            </Col>
          </Row>
          <ProductsList data={bestSalesProducts} />
        </Container>
      </section>

    </Helmet>
  )
}

export default Home;