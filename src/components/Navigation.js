import React from 'react';
import './Navigation.css';
import './Contact.js';

const Navigation = (props) => (
    <div id="myNav" className="overlay">
        <a className="closebtn" onClick={() => props.closeNav()}>&times;</a>
        <div className="overlay-content">
            <a href="">Vitamin Juice</a>
            <a href="">Clothing</a>
            <a href="">Supplements</a>
            <a href="" onClick={() => './Contact.js'}>Contact</a>
            {/* <a onClick={() => { document.location.href = "contact.html"; }}>Contact</a> */}
        </div>
    </div>
);

export default Navigation;