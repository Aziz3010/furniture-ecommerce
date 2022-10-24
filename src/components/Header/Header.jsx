import React, { useEffect, useRef } from 'react';
import "./Header.css";
import { Container, Row } from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/eco-logo.png";
import userPhoto from "../../assets/images/user-icon.png";
import { motion } from "framer-motion";
import { useSelector } from 'react-redux';

const nav__link = [
  {
    "path": "/home",
    "display": "Home"
  },
  {
    "path": "/shop",
    "display": "Shop"
  },
  {
    "path": "/cart",
    "display": "Cart"
  }
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const totalQuantity = useSelector(state=>state.cart.totalQuantity);

  const stickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    stickyHeader();
    return () => window.removeEventListener("scroll", stickyHeader);
  });

  const menuToggle = () => {
    menuRef.current.classList.toggle("active__menu");
  };

  const navigateToCart = () => {
    navigate("/cart");
  };


  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            {/* logo */}
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Azizmarket</h1>
                <p>Since 1995</p>
              </div>
            </div>

            {/* navigation */}
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav__link.map((link, index) => {
                  return (
                    <li className="nav__item" key={index}>
                      <NavLink to={link.path} className={(navClass) => navClass.isActive ? 'nav__active' : ''} >{link.display}</NavLink>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* nav icons */}
            <div className="nav__icons">
              <span className='fav__icon'>
                <i className="ri-heart-line"></i>
                <span className='bdg'>0</span>
              </span>
              <span className='cart__icon' onClick={navigateToCart}>
                <i className="ri-shopping-bag-line"></i>
                <span className='bdg'>{totalQuantity}</span>
              </span>
              <span>
                <motion.img whileTap={{ scale: 1.2 }} src={userPhoto} alt="user photo" />
              </span>
              {/* mobile menu */}
              <div className="mobile__menu">
                <span  onClick={menuToggle}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header;