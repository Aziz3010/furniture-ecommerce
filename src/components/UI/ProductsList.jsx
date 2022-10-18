import React from 'react';
import { Row } from 'reactstrap';
import ProductCard from './ProductCard';

const ProductsList = ({ data }) => {
    return (
        <Row>
            {data?.map((productData,index) => {
                return (
                    <ProductCard productData={productData} key={index} />
                )
            })}
        </Row>
    )
}

export default ProductsList;