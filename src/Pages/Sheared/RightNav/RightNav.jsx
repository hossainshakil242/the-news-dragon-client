import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png';

const RightNav = () => {
    return (
        <div className='mt-4'>
            <h2>Logi With</h2>
            <Button className='mb-2' variant="outline-secondary"><FaGoogle />Login With Google</Button>
            <Button variant="outline-secondary"><FaGithub />Login With Github</Button>

            <div className='mt-4'>
                <h2>Find On Us</h2>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='pt-4'>
                <QZone></QZone>
            </div>
            <div>
            <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;