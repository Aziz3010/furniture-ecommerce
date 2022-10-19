import React, { useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import "../styles/shopPage.css";
import Products from "../assets/data/products";
import ProductsList from '../components/UI/ProductsList';

const Shop = () => {
  const [productsData, setProductsData] = useState(Products);

  return <Helmet title="Shop">
    <section>
      <Container>
        <Row className='mb-5'>
          <Col lg="3" md="3">
            <div className="filter__widget">
              <select>
                <option>Filter By Category</option>
                <option value="sofa">Sofa</option>
                <option value="chair">Chair</option>
                <option value="mobile">Mobile</option>
                <option value="watch">Watch</option>
                <option value="wireless">Wireless</option>
              </select>
            </div>
          </Col>
          <Col lg="3" md="3">
            <div className="filter__widget">
              <select>
                <option>Sort By</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="search__box">
              <input type="text" placeholder='Search...' />
              <span><i className="ri-search-line"></i></span>
            </div>
          </Col>
        </Row>

        <ProductsList data={productsData} />

      </Container>
    </section>
  </Helmet>
}

export default Shop;
