import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
    return (
        <nav className='f1 white pa3' style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <FontAwesomeIcon className='link dim pointer' icon={faArrowRightFromBracket} />
        </nav>
    );
}

export default Navigation;