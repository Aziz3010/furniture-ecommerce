import React from 'react';
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import './Services.css';
import serviceData from "../assets/data/serviceData";

const Services = () => {
    return <section className="services">
        <Container>
            <Row>
                {serviceData.map((service, index) => {
                    return (
                        <Col lg="3" md="4" key={index} className="my-2">
                            <motion.div whileHover={{scale: 1.1}} className="service__item" style={{backgroundColor: service.bg}}>
                                <span><i className={service.icon}></i></span>
                                <div>
                                    <h3>{service.title}</h3>
                                    <p>{service.subtitle}</p>
                                </div>
                            </motion.div>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    </section>
}

export default Services;