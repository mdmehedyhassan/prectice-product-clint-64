import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const linkStyles = {
        backgroundColor: 'gray',
        color: 'white',
        margin: '10px',
        padding: '10px',
        textDecoration: 'none',
    }
    return (
        <div >
            <nav style={{marginTop: '20px', textAlign: 'center'}}>
                <Link style={linkStyles} to="/home">Home</Link>
                <Link style={linkStyles} to="/products">Product</Link>
                <Link style={linkStyles} to="/added">Added Product</Link>
            </nav>
        </div>
    );
};

export default Header;