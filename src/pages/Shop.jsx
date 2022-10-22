import React, { useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import Products from "../assets/data/products";
import ProductsList from '../components/UI/ProductsList';
import { Container, Row, Col } from 'reactstrap';
import "../styles/shopPage.css";

const Shop = () => {
  const [productsData, setProductsData] = useState(Products);
  const [sortData, setSortData] = useState("none");

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue !== "none") {
      setProductsData(Products.filter((product) => product.category === filterValue));
    } else {
      setProductsData(Products);
    };
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    if (searchValue !== "") {
      setProductsData(Products.filter((product) => product.productName.toLowerCase().includes(searchValue.toLowerCase())));
    } else {
      setProductsData(Products);
    };
  };

  return <Helmet title="Shop">
    <section>
      <Container>
        <Row className='mb-2'>
          <Col lg="3" md="3" className='mb-3'>
            <div className="filter__widget">
              <select name='categories' onChange={handleFilter}>
                <option value="none">Filter By Category</option>
                <option value="sofa">Sofa</option>
                <option value="chair">Chair</option>
                <option value="mobile">Mobile</option>
                <option value="watch">Watch</option>
                <option value="wireless">Wireless</option>
              </select>
            </div>
          </Col>
          <Col lg="3" md="3" className='mb-3'>
            <div className="filter__widget">
              <select name='sorting' onChange={(e) => { setSortData(e.target.value) }}>
                <option value="none">Sort By</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </Col>
          <Col lg="6" md="6" className='mb-3'>
            <div className="search__box">
              <input type="text" placeholder='Search...' onChange={(e) => { handleSearch(e) }} />
              <span><i className="ri-search-line"></i></span>
            </div>
          </Col>
        </Row>
        {
          sortData === "none" ? <ProductsList data={productsData} /> :
            sortData === "ascending" ? <ProductsList data={productsData.sort((a, b) => (parseFloat(a.price) > parseFloat(b.price) ? 1 : -1))} /> :
              sortData === "descending" ? <ProductsList data={productsData.sort((a, b) => (parseFloat(a.price) > parseFloat(b.price) ? -1 : 1))} /> :
                <p className='m-0 text-center'>No sort tpye</p>
        }
      </Container>
    </section>
  </Helmet>
}

export default Shop;