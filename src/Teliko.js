import React from 'react';
import {isMobile} from 'react-device-detect';
import App from './App';


const Teliko = () => {
    if(isMobile) {
        return (
            <div> <App/></div>
        )
    }
    return (
        <div> <App/></div>
    );
};

export default Teliko;