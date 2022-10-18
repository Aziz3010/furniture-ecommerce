import React from 'react';
import "./Header.css";
import { Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/eco-logo.png";
import userPhoto from "../../assets/images/user-icon.png";
import { motion } from "framer-motion";

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
  return (
    <header className='header'>
      <Container>
        <Row>
          <div className="nav__wrapper">
            {/* logo */}
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Multimart</h1>
                <p>Since 1995</p>
              </div>
            </div>

            {/* navigation */}
            <div className="navigation">
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
                <span className='bdg'>2</span>
              </span>
              <span className='cart__icon'>
                <i className="ri-shopping-bag-line"></i>
                <span className='bdg'>1</span>
              </span>
              <span>
                <motion.img whileTap={{ scale: 1.2 }} src={userPhoto} alt="user photo" />
              </span>
            </div>

            {/* mobile menu */}
            <div className="mobile__menu">
              <span>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header;