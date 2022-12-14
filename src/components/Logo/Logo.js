import React from 'react';
import Tilt from 'react-parallax-tilt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { RemoveScroll } from 'react-remove-scroll';
import './Logo.css';

const Logo = () => {
    return (
        <RemoveScroll>
            <div className='center mb5' style={{ height: '150px', width: '150px' }}>
                <Tilt className='Tilt' perspective={1000}>
                    <div className='shadow-2' style={{ height: '150px', width: '150px' }}>
                        <FontAwesomeIcon className='white mv3' icon={faBrain} style={{ fontSize: '120px' }} />
                    </div>
                </Tilt>
            </div>
        </RemoveScroll>
    );
}

export default Logo;