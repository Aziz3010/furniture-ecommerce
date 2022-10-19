import React from 'react';
import { motion } from "framer-motion";
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import "../../styles/productCard.css";
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slices/CartSlice';
import { toast } from 'react-toastify';

const ProductCard = ({productData}) => {
    const dispatch = useDispatch();
    const addToCart = ()=>{
        dispatch(cartActions.addItem({
            id: productData.id,
            productName: productData.productName,
            image: productData.imgUrl,
            price: productData.price,
        }));
        toast.success("Produt added successfully");
    };

    return (
        <Col lg="3" md="4" className='mb-2'>
            <div className='product__item'>
                <div className="product__img">
                    <motion.img whileHover={{ scale: 0.9 }} src={productData.imgUrl} alt={productData.productName} />
                </div>

                <div className="p-2 product__info">
                    <Link to={`/shop/${productData.id}`}><h3>{productData.productName}</h3></Link>
                    <span>{productData.category}</span>
                </div>

                <div className="product__card-buttom d-flex justify-content-between align-items-center p-2">
                    <span className='price'>${productData.price}</span>
                    <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}><i className="ri-add-line"></i></motion.span>
                </div>
            </div>
        </Col>
    )
}

export default ProductCard;