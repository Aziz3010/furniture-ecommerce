import React from 'react';
import { Row } from 'reactstrap';
import ProductCard from './ProductCard';

const ProductsList = ({ data }) => {
    return (
        <Row>
            {
                data.length > 0 ?
                    data?.map((productData, index) => {
                        return (
                            <ProductCard productData={productData} key={index} />
                        )
                    })



                    : <p className='text-center m-0'>No products</p>
            }
        </Row>
    )
}

export default ProductsList;