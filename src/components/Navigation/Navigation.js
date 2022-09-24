import React from 'react';
import { ReactDOM } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
    return (
        <nav className='f1 link dim white pr4 pt3 pointer' style={{ position: 'absolute', right: 0 }}>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </nav>
    );
}

export default Navigation;