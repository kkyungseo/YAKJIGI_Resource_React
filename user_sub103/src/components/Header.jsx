import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header>
            <Link to="/">홈</Link>
            <Link to="/Sub102">Sub102</Link>
            <Link to="/Sub103">Sub103</Link>
        </header>
    );
}

export default Header;