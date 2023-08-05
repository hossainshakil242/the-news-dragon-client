import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../Pages/Sheared/RightNav/RightNav';
import Footer from '../Pages/Sheared/Footer/Footer';
import Header from '../Pages/Sheared/Header/Header';
import { Outlet } from 'react-router-dom';
import NevigationBar from '../Pages/Sheared/NevigationBar/NevigationBar';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <NevigationBar></NevigationBar>

            <Container>
                <Row>
                    <Col lg={9}>
                        <Outlet></Outlet>
                    </Col>

                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>

            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;