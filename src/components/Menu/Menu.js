import React from 'react'
import './styles.css'

const Menu = () => {
    return (
        <div className="menu">
            <img src={require('../../assets/img/abc_logo.svg').default} alt='logo' />
            <div className="menu-items">
                <p>Industries</p>
                <p>Services</p>
                <p>About Us</p>
            </div>
        </div>
    )
}

export default Menu
