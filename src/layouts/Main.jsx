import React from 'react';
import Header from '../Pages/Sheared/Header/Header';
import Footer from '../Pages/Sheared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Pages/Sheared/LeftNav/LeftNav';
import RightNav from '../Pages/Sheared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import NevigationBar from '../Pages/Sheared/NevigationBar/NevigationBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NevigationBar></NevigationBar>

            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>

                    <Col lg={6}>
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

export default Main;